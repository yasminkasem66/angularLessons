import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFOrmComponent } from './new-course-form/new-course-form.component';
import { LikesComponent } from './likes/likes.component';
import { RichtexteditorComponent } from './richtexteditor/richtexteditor.component';
import { RichTextEditorModule, ToolbarService, TableService, QuickToolbarService, 
  LinkService, ImageService, HtmlEditorService, MarkdownEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { TitleCasePipe } from './pipes/title-case.pipe';
@NgModule({
  declarations: [AppComponent, SignupFormComponent, Exercise1Component, NewCourseFOrmComponent, LikesComponent, RichtexteditorComponent, TitleCasePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,RichTextEditorModule],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService,
    QuickToolbarService, MarkdownEditorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
