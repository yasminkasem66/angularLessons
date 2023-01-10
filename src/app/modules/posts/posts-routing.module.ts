import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [{ path: '', component: PostsComponent }];

@NgModule({
  declarations: [],
  imports: [[RouterModule.forChild(routes)], CommonModule],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
