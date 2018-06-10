import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewFormCourseComponent } from './new-form-course/new-form-course.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    ContactFormComponent,
    NewFormCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
