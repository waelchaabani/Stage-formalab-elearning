import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Course } from 'src/app/model/course';
import { Instructor } from 'src/app/model/instructor';
import { CategoryService } from 'src/app/services/category.service';
import { CourseService } from 'src/app/services/course.service';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-allcourses',
  templateUrl: './allcourses.component.html',
  styleUrls: ['./allcourses.component.css']
})
export class AllcoursesComponent implements OnInit {

 
  categories: Category[] = []
  courses:Course[]=[]
  course:Course

  instructors:Instructor[]=[]
  instructor:Instructor

  constructor(private categoryservice: CategoryService,private courseService:CourseService,private instructorService:InstructorService,private route: ActivatedRoute,) { }



  ngOnInit(): void {
    this.getAllCategories();
    this.getAllCourse();
    this.getInstructor();

    

  }
  getInstructor() {
    let id = this.route.snapshot.params.id;

    this.instructorService.findInstructorById(id).subscribe(
      (result) => {
        this.instructor = result;
      },
      (err) => {
        console.log(err);      
      }
    )
  }
  getCourse() {
    let id = this.route.snapshot.params.id;

    this.courseService.findCourseById(id).subscribe(
      (result) => {
        this.course = result;
      },
      (err) => {
        console.log(err);      
      }
    )
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


}
