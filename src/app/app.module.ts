import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFOrmComponent } from './new-course-form/new-course-form.component';
import { LikesComponent } from './likes/likes.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { InputformatDirective } from './directives/inputformat.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { FormWorkTestComponent } from './form-work-test/form-work-test.component';
@NgModule({
  declarations: [AppComponent, SignupFormComponent, Exercise1Component, NewCourseFOrmComponent, LikesComponent, TitleCasePipe, InputformatDirective, ZippyComponent, FormWorkTestComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
