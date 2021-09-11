import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from 'src/app/model/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  addcourseForm: FormGroup
  constructor(
    private fb: FormBuilder,

    private router:Router,
    private blogService:BlogService) {

    let formControls = {
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      description: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      image: new FormControl('',[
      ]),
      date: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
     
      
     
     
      instructor: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
     
      tag: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      
    }

    this.addcourseForm = this.fb.group(formControls)
  }

  get name() { return this.addcourseForm.get('name') }
  get description() { return this.addcourseForm.get('description') }
  get image() { return this.addcourseForm.get('image') }
  get date() { return this.addcourseForm.get('date') }



  get instructor() { return this.addcourseForm.get('instructor') }
  get tag() { return this.addcourseForm.get('tag') }
 

  ngOnInit(): void {
   
   
  }

  addcourse(){
    let data = this.addcourseForm.value;
    let blog=new Blog(undefined,data.name,data.description,data.image,data.date,data.instructor,data.tag)
    console.log(blog)
    this.blogService.addCourse(blog).subscribe(
      res=>this.router.navigateByUrl("blog"),
      err=>console.log(err)
      
    )
    
    
      
  }

}
