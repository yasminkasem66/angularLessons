import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFOrmComponent } from './new-course-form/new-course-form.component';
import { LikesComponent } from './likes/likes.component';
import { TitleCasePipe } from './@core/pipes/title-case.pipe';
import { InputformatDirective } from './@core/directives/inputformat.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { FormWorkTestComponent } from './form-work-test/form-work-test.component';
import { FormWorkTest2Component } from './form-work-test2/form-work-test2.component';
import { Ng2TelInputComponent } from './ng2-tel-input/ng2-tel-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { HomeComponent } from './Home/home.component';
import { HighLightDirective } from './@core/directives/high-light.directive';
import { RandomCOlorDirective } from './@core/directives/random-color.directive';
import { DefaultImagePipe } from './@core/pipes/default-image.pipe';
import { SumPipe } from './@core/pipes/sum.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AppErrorHandlerService } from './@AppServices/services/app-error-handler.service';
import { NotfoundComponent } from './notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    Exercise1Component,
    NewCourseFOrmComponent,
    LikesComponent,
    TitleCasePipe,
    InputformatDirective,
    ZippyComponent,
    FormWorkTestComponent,
    FormWorkTest2Component,
    Ng2TelInputComponent,
    HomeComponent,
    HighLightDirective,
    RandomCOlorDirective,
    DefaultImagePipe,
    SumPipe,
    NavbarComponent,
    ChangepasswordComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2TelInputModule,
    HttpClientModule,
  ],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandlerService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
