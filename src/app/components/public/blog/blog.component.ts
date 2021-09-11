import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/blog';
import { Instructor } from 'src/app/model/instructor';
import { BlogService } from 'src/app/services/blog.service';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog:Blog[]=[]
  instructors:Instructor[]=[]



  constructor(private blogService:BlogService ,private instructorService:InstructorService) { }



  ngOnInit(): void {
    this.getAllBlog();
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

  getAllBlog() {
    this.blogService.findAllCourse().subscribe(
      (res) => this.blog = res,
      (err) => console.log(err)
    )
  }

 


 
  
  

}
