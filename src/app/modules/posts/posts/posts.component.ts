import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from 'src/app/@AppServices/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  @ViewChild('post', { static: true }) post!: HTMLInputElement;

  constructor(private postService: PostsService) {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAll().subscribe({
      next: (data: any) => {
        this.posts = data;
      },
    });
  }

  createPost(title: HTMLInputElement) {
    let post: any = { title: title.value };
    this.posts.splice(0, 0, post);

    title.value = '';

    this.postService.create(post).subscribe({
      next: (data: any) => {
        post['id'] = data.id;
      },
      error: (err: HttpErrorResponse) => {
        this.posts.splice(0, 1);
        if (err.status === 400) {
          alert('this post has already been deleted ');
        } else throw err;
      },
    });
  }
  update(post: any) {
    console.log({ post });
    post.title = 'jasmin';
    this.postService.update(post).subscribe({
      next: (data: any) => {
        console.log({ data });
      },
      error: (err: any) => {
        alert('An unexpected error occured');
        console.log(err);
      },
    });
  }
  Delete(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(74444).subscribe({
      next: () => {},
      error: (err: any) => {
        this.posts.splice(index, 0, post);
        console.log(err);
      },
    });
  }

  ngOnInit(): void {}
}
