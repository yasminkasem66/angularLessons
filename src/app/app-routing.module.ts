import { NewCourseFOrmComponent } from './new-course-form/new-course-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikesComponent } from './likes/likes.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
  { path: '', component: LikesComponent, pathMatch: 'full' },
  { path: 'course', component: NewCourseFOrmComponent },
  { path: 'password', component: ChangepasswordComponent },
  { path: 'likes', component: LikesComponent },
  {
    path: 'post',
    loadChildren: () =>
      import('./modules/posts/posts.module').then((m) => m.PostsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
