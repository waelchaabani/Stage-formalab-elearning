import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { Instructor } from 'src/app/model/instructor';
import { CourseService } from 'src/app/services/course.service';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','./../../../../../assets/css/style.css','./../../../../../assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css','./../../../../../assets/vendor/pickadate/themes/default.css','./../../../../../assets/vendor/datatables/css/jquery.dataTables.min.css']
})
export class DashboardComponent implements OnInit {
courses:Course[]=[]
  course;
  instructors:Instructor[]=[]
instructor;
  constructor(private courseService:CourseService,private instructorService:InstructorService) { }

  ngOnInit(): void {
    this.getAllCourse();
    this.getAllInstructor();


  }
  getAllCourse() {
    this.courseService.findAllCourse().subscribe(
      (res) => this.course = res,
      (err) => console.log(err)
    )
  }
  getAllInstructor() {
    this.instructorService.getAllCategory().subscribe(
      (result) => {
        this.instructor = result;
      },
      (err) => {
        console.log(err);      
      }
    )
  }

}
