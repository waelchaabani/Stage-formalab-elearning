import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Course } from 'src/app/model/course';
import { Instructor } from 'src/app/model/instructor';
import { CategoryService } from 'src/app/services/category.service';
import { CourseService } from 'src/app/services/course.service';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-coursehome',
  templateUrl: './coursehome.component.html',
  styleUrls: ['./coursehome.component.css']
})
export class CoursehomeComponent implements OnInit {

  categories: Category[] = []
  courses:Course[]=[]
  instructors:Instructor[]=[]
  allcourses: Course[] = [];



  constructor(private categoryservice: CategoryService,private courseService:CourseService,private instructorService:InstructorService) { }



  ngOnInit(): void {
    this.getAllCategories();
    this.getAllCourse();
    this.getAllInstructor();


  }
  getAllInstructor() {
    this.instructorService.getAllCategory().subscribe(
      (result) => {
        this.instructors = result;
      },
      (err) => {
        console.log(err);      
      }
    )
  }

  getAllCourse() {
    this.courseService.findAllCourse().subscribe(
      (res) =>{ 
        this.courses = res;
      this.allcourses=res;
      },
      (err) =>{ console.log(err) }
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


  getAllCategories() {
    this.categoryservice.getAllCategory().subscribe(
      (result) => {
        this.categories = result;
      },
      (err) => {
        console.log(err);      
      }
    )
  }
  
  deleteCategory(category: any) {
    //1st method of deleting from view without refreshing
    /* let index = this.categories.indexOf(category);
    this.categories.splice(index, 1); */
    
    this.categoryservice.deleteCategory(category.id).subscribe(
      (result) => {
 
        let index = this.categories.indexOf(category);
        this.categories.splice(index, 1);
        //2nd method of deleting from view without refreshing
        //this.getAllCategories();
      },
      (err) => {
        console.log(err);
      }

    )
  }
  filterByCategory(id: Number | undefined) {
    id == 0 ? this.courses = this.allcourses :
     this.courses = this.allcourses.filter( (p) => p.category?.id == id);
  }

}
