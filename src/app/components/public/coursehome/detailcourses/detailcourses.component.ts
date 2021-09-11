import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Course } from 'src/app/model/course';
import { Instructor } from 'src/app/model/instructor';
import { CategoryService } from 'src/app/services/category.service';
import { CourseService } from 'src/app/services/course.service';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-detailcourses',
  templateUrl: './detailcourses.component.html',
  styleUrls: ['./detailcourses.component.css']
})
export class DetailcoursesComponent implements OnInit {

  categories: Category[] = []
  courses:Course[]=[]
  id:any
  course:Course
  instructor:Instructor
  instructors:Instructor[]=[]



  constructor(private categoryservice: CategoryService,private courseService:CourseService, private route: ActivatedRoute, private instructorservice:InstructorService
    ) { }



  ngOnInit(): void {
    this.getAllCategories();
    this.getAllCourse();
    this.getcoursebyId();
    this.findInstructorById();
    
   

  }
  findInstructorById(){
    let id = this.route.snapshot.params.id;
    
    this.instructorservice.findInstructorById(id).subscribe(
      res=>{
        this.instructors=res;
       
        
      },
      err=>{
        console.log(err);
      }
    )
  }
  getcoursebyId(){
    let id = this.route.snapshot.params.id;
    
      this.courseService.findCourseById(id).subscribe(
        res=>{
          this.course=res;
         
          
        },
        err=>{
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
