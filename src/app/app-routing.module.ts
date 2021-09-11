import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutcoursesComponent } from './components/private/admin/courses/aboutcourses/aboutcourses.component';
import { AllcoursesComponent } from './components/private/admin/courses/allcourses/allcourses.component';
import { ListinstructorComponent } from './components/private/admin/instructor/listinstructor/listinstructor.component';
import { ProfilinstructorComponent } from './components/private/admin/instructor/profilinstructor/profilinstructor.component';
import { LoginAdminComponent } from './components/private/admin/login-admin/login-admin.component';
import { LoginComponent } from './components/private/admin/login/login.component';
import { RegisterAdminComponent } from './components/private/admin/register-admin/register-admin.component';
import { RegisterComponent } from './components/private/admin/register/register.component';
import { AllstudentComponent } from './components/private/admin/student/allstudent/allstudent.component';
import { StudentdetailComponent } from './components/private/admin/student/studentdetail/studentdetail.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { AboutusComponent } from './components/public/aboutus/aboutus.component';
import { BlogComponent } from './components/public/blog/blog.component';
import { DetailblogComponent } from './components/public/blog/detailblog/detailblog.component';
import { CoursehomeComponent } from './components/public/coursehome/coursehome.component';
import { DetailcoursesComponent } from './components/public/coursehome/detailcourses/detailcourses.component';
import { HomeComponent } from './components/public/home/home.component';
import { DetailinstrucorComponent } from './components/public/instructor/detailinstructor/detailinstrucor.component';
import { InstructorComponent } from './components/public/instructor/instructor.component';
import { AddcategoryComponent } from './components/public/instructor/instructordashboard/addcategory/addcategory.component';
import { AddcourseComponent } from './components/public/instructor/instructordashboard/addcourse/addcourse.component';
import { AddblogComponent } from './components/public/instructor/instructordashboard/blog/addblog/addblog.component';
import { InstructordashboardComponent } from './components/public/instructor/instructordashboard/instructordashboard.component';
import { ListcategoryComponent } from './components/public/instructor/instructordashboard/listcategory/listcategory.component';
import { ListcourseComponent } from './components/public/instructor/instructordashboard/listcourse/listcourse.component';
import { UpdatecategoryComponent } from './components/public/instructor/instructordashboard/updatecategory/updatecategory.component';
import { UpdatecourseComponent } from './components/public/instructor/instructordashboard/updatecourse/updatecourse.component';
import { LogininstructorComponent } from './components/public/instructor/logininstructor/logininstructor.component';
import { RegisterinstructorComponent } from './components/public/instructor/registerinstructor/registerinstructor.component';
import { AdminGuard } from './guards/admin.guard';
import { InstructorGuard } from './guards/instructor.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path: 'dashboard', component: DashboardComponent,canActivate: [AdminGuard]
  },
  {
    path: 'courses', component: AllcoursesComponent,canActivate: [AdminGuard]
  },
  {
    path: 'aboutcourses', component: AboutcoursesComponent
  },
  {
    path: 'listinstructor', component: ListinstructorComponent,canActivate: [AdminGuard]
  },
  {
    path: 'profilinstructor/:id', component: ProfilinstructorComponent,canActivate: [AdminGuard]
  },
  {
    path: 'liststudent', component: AllstudentComponent,canActivate: [AdminGuard]
  },
  {
    path: 'studentdetail', component: StudentdetailComponent,canActivate: [AdminGuard]
  },

  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'homecourses', component: CoursehomeComponent
  },
  {
    path: 'detailcourses/:id', component: DetailcoursesComponent
  },
  
  {
    path: 'instructor', component: InstructorComponent
  },
  {
    path: 'detailinstructor/:id', component: DetailinstrucorComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'detailblog/:id', component: DetailblogComponent
  },
  {
    path: 'blog/addblog', component: AddblogComponent
  },
  {
    path:'registerinstructor',component:RegisterinstructorComponent
  },
  {
    path:'logininstructor',component:LogininstructorComponent
  },
  {
    path:'aboutus',component:AboutusComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'instructordashoard',component:InstructordashboardComponent,canActivate: [InstructorGuard]},
  {
    path:'addcourse',component:AddcourseComponent,canActivate: [InstructorGuard]
  },
  {
    path:'addcategory',component:AddcategoryComponent,canActivate: [InstructorGuard]
  },
  {
    path:'listcategory',component:ListcategoryComponent,canActivate: [InstructorGuard]
  },
  {
    path:'category/update/:id',component:UpdatecategoryComponent,canActivate: [InstructorGuard]
  },
  {
    path:'listcourse',component:ListcourseComponent,canActivate: [InstructorGuard]
  },
  {
    path:'login-admin',component:LoginAdminComponent
  },
  {
    path:'courses/update/:id',component:UpdatecourseComponent,canActivate: [InstructorGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
