import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { EnrollFormComponent } from './enroll-form/enroll-form.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import { NewStudentsComponent } from './new-students/new-students.component';
import { EnrolledStudentsComponent } from './enrolled-students/enrolled-students.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';
import { AnsweredStudentsComponent } from './answered-students/answered-students.component';
import { GradeExamComponent } from './grade-exam/grade-exam.component';
import { ExamHomeComponent } from './exam-home/exam-home.component';
import { TakeExamComponent } from './take-exam/take-exam.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenService } from './services/intercept.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnrollFormComponent,
    StaffHomeComponent,
    NewStudentsComponent,
    EnrolledStudentsComponent,
    AdminHomeComponent,
    ManageStaffComponent,
    ManageQuestionsComponent,
    AnsweredStudentsComponent,
    GradeExamComponent,
    ExamHomeComponent,
    TakeExamComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass:AuthenService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }