import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Course } from 'src/app/model/course';
import { CategoryService } from 'src/app/services/category.service';
import { CourseService } from 'src/app/services/course.service';
import { InstructorService } from 'src/app/services/instructor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./../../../../assets/front/css/styles.css','./../../../../assets/front/css/colors.css','./../../../../assets/front/css/plugins/slick-theme.css']
  
})
export class HomeComponent implements OnInit {
  categories: Category[] = []
  courses:Course[]=[]
  IsLoggedIn : Boolean ;
  IsLoggedInInstructor:Boolean;

  constructor(private categoryservice: CategoryService,private courseService:CourseService,private instructorservice:InstructorService,private router :Router,private userservice:UserService) { }



  ngOnInit(): void {
    this.getAllCategories();
    this.getAllCourse();
    this.IsLoggedIn = this.userservice.isLoggedIn();
    this.IsLoggedInInstructor = this.userservice.isLoggedInstroctor();


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
