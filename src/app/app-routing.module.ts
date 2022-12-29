import { NewCourseFOrmComponent } from './new-course-form/new-course-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikesComponent } from './likes/likes.component';

const routes: Routes = [
  { path: '', component: LikesComponent, pathMatch: 'full' },
  { path: 'cource', component: NewCourseFOrmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
