import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Course } from 'src/app/model/course';
import { CategoryService } from 'src/app/services/category.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-instructordashboard',
  templateUrl: './instructordashboard.component.html',
  styleUrls: ['./instructordashboard.component.css']
})
export class InstructordashboardComponent implements OnInit {
  courses:Course[]=[]
  course;
  categories: Category[] = []
categorie;
  constructor(private courseService:CourseService,private categoryservice:CategoryService) { }
  

  ngOnInit(): void {
    this.getAllCourse();
    this.getAllCategories();


  }
  getAllCourse() {
    this.courseService.findAllCourse().subscribe(
      (res) => this.course = res,
      (err) => console.log(err)
    )
  }
  getAllCategories() {
    this.categoryservice.getAllCategory().subscribe(
      (result) => {
        this.categorie = result;
      },
      (err) => {
        console.log(err);      
      }
    )
  }

}
