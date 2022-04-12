import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFOrmComponent } from './new-course-form/new-course-form.component';

@NgModule({
  declarations: [AppComponent, SignupFormComponent, Exercise1Component, NewCourseFOrmComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
