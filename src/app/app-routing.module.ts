import { ToDosComponent } from './to-do/to-do.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikesComponent } from './likes/likes.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomeComponent } from './Home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'course', component: ToDosComponent },
  { path: 'password', component: ChangepasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'likes', component: LikesComponent },
  {
    path: 'post',
    loadChildren: () =>
      import('./modules/posts/posts.module').then((m) => m.PostsModule),
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
