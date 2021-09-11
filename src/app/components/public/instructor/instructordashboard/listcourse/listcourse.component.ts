import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-listcourse',
  templateUrl: './listcourse.component.html',
  styleUrls: ['./listcourse.component.css']
})
export class ListcourseComponent implements OnInit {

  courses:Course[]=[]
  constructor( private courseService:CourseService) { }

  ngOnInit(): void {
    this.getAllCourse();
  }

  getAllCourse() {
    this.courseService.findAllCourse().subscribe(
      (res) => this.courses = res,
      (err) => console.log(err)
    )
  }

  deleteCourse(course: any) {
    
    this.courseService.deleteCourse(course.id).subscribe(
      (result) => {
 
        let index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
      },
      (err) => {
        console.log(err);
      }

    )
  }

}
