import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/model/blog';
import { Instructor } from 'src/app/model/instructor';
import { BlogService } from 'src/app/services/blog.service';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-detailblog',
  templateUrl: './detailblog.component.html',
  styleUrls: ['./detailblog.component.css']
})
export class DetailblogComponent implements OnInit {
  blogs:Blog[]=[]
  id:any
  blog:Blog
  instructor:Instructor
  instructors:Instructor[]=[]



  constructor(private blogService:BlogService, private route: ActivatedRoute, private instructorservice:InstructorService
    ) { }



  ngOnInit(): void {
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
    
      this.blogService.findCourseById(id).subscribe(
        res=>{
          this.blog=res;
         
          
        },
        err=>{
          console.log(err);
        }
      )
   
  }
  getAllCourse() {
    this.blogService.findAllCourse().subscribe(
      (res) => this.blogs = res,
      (err) => console.log(err)
    )
  }

 
 

}
