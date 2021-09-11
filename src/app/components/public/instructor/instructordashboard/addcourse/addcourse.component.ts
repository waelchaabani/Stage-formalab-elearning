import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Course } from 'src/app/model/course';
import { CategoryService } from 'src/app/services/category.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  addcourseForm: FormGroup
  categories:Category[]=[]
  constructor(
    private fb: FormBuilder,

    private router:Router,
    private serviceCategory:CategoryService,private courseservice:CourseService) {

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
      price: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+.?[0-9]+")
      ]),
      
     
      category: new FormControl('',[
        Validators.required
      ]),
      instructor: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      date: new FormControl('',[
        Validators.required,
      ]),
      tag: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      difficulty: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      estimated_duration: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
    }

    this.addcourseForm = this.fb.group(formControls)
  }

  get name() { return this.addcourseForm.get('name') }
  get description() { return this.addcourseForm.get('description') }
  get image() { return this.addcourseForm.get('image') }

  get price() { return this.addcourseForm.get('price') }

  get category() { return this.addcourseForm.get('category') }

  get instructor() { return this.addcourseForm.get('instructor') }
  get date() { return this.addcourseForm.get('date') }
  get tag() { return this.addcourseForm.get('tag') }
  get difficulty() { return this.addcourseForm.get('difficulty') }
  get estimated_duration() { return this.addcourseForm.get('estimated_duration') }

  ngOnInit(): void {
    this.serviceCategory.getAllCategory().subscribe(
      (res)=>this.categories=res,
      (err)=>console.log(err)   
    )
   
  }

  addcourse(){
    let data = this.addcourseForm.value;
    let course=new Course(undefined,data.name,data.description,data.image,data.price,data.instructor,data.date,data.tag,data.difficulty,data.estimated_duration,new Category(data.category))
    console.log(course)
    this.courseservice.addCourse(course).subscribe(
      res=>this.router.navigateByUrl("listcourse"),
      err=>console.log(err)
      
    )
    
    
      
  }
}
