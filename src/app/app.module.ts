import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { HeaderComponent } from './components/private/shared/header/header.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { FooterComponent } from './components/private/shared/footer/footer.component';
import { ListinstructorComponent } from './components/private/admin/instructor/listinstructor/listinstructor.component';
import { AllcoursesComponent } from './components/private/admin/courses/allcourses/allcourses.component';
import { ProfilinstructorComponent } from './components/private/admin/instructor/profilinstructor/profilinstructor.component';
import { AboutcoursesComponent } from './components/private/admin/courses/aboutcourses/aboutcourses.component';
import { AllstudentComponent } from './components/private/admin/student/allstudent/allstudent.component';
import { StudentdetailComponent } from './components/private/admin/student/studentdetail/studentdetail.component';
import { HomeComponent } from './components/public/home/home.component';
import { SharedComponent } from './components/public/shared/shared.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { TopbarComponent } from './components/public/shared/topbar/topbar.component';
import { FootersComponent } from './components/public/shared/footers/footers.component';
import { CoursehomeComponent } from './components/public/coursehome/coursehome.component';
import { DetailcoursesComponent } from './components/public/coursehome/detailcourses/detailcourses.component';
import { InstructorComponent } from './components/public/instructor/instructor.component';
import { DetailinstrucorComponent } from './components/public/instructor/detailinstructor/detailinstrucor.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { DetailblogComponent } from './components/public/blog/detailblog/detailblog.component';
import { RegisterinstructorComponent } from './components/public/instructor/registerinstructor/registerinstructor.component';
import { LogininstructorComponent } from './components/public/instructor/logininstructor/logininstructor.component';
import { AboutusComponent } from './components/public/aboutus/aboutus.component';
import { LoginComponent } from './components/private/admin/login/login.component';
import { RegisterComponent } from './components/private/admin/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstructordashboardComponent } from './components/public/instructor/instructordashboard/instructordashboard.component';
import { AddcourseComponent } from './components/public/instructor/instructordashboard/addcourse/addcourse.component';
import { AddcategoryComponent } from './components/public/instructor/instructordashboard/addcategory/addcategory.component';
import { ListcategoryComponent } from './components/public/instructor/instructordashboard/listcategory/listcategory.component';
import { HttpClientModule } from "@angular/common/http";
import { UpdatecategoryComponent } from './components/public/instructor/instructordashboard/updatecategory/updatecategory.component';
import { ListcourseComponent } from './components/public/instructor/instructordashboard/listcourse/listcourse.component';
import { LoginAdminComponent } from './components/private/admin/login-admin/login-admin.component';
import { RegisterAdminComponent } from './components/private/admin/register-admin/register-admin.component';
import { UpdatecourseComponent } from './components/public/instructor/instructordashboard/updatecourse/updatecourse.component';
import { AddblogComponent } from './components/public/instructor/instructordashboard/blog/addblog/addblog.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ListinstructorComponent,
    AllcoursesComponent,
    ProfilinstructorComponent,
    AboutcoursesComponent,
    AllstudentComponent,
    StudentdetailComponent,
    HomeComponent,
    SharedComponent,
    NavbarComponent,
    TopbarComponent,
    FootersComponent,
    CoursehomeComponent,
    DetailcoursesComponent,
    InstructorComponent,
    DetailinstrucorComponent,
    BlogComponent,
    DetailblogComponent,
    RegisterinstructorComponent,
    LogininstructorComponent,
    AboutusComponent,
    LoginComponent,
    RegisterComponent,
    InstructordashboardComponent,
    AddcourseComponent,
    AddcategoryComponent,
    ListcategoryComponent,
    UpdatecategoryComponent,
    ListcourseComponent,
    LoginAdminComponent,
    RegisterAdminComponent,
    UpdatecourseComponent,
    AddblogComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
