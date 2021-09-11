import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Course } from 'src/app/model/course';
import { CategoryService } from 'src/app/services/category.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {
  updateCourseForm: FormGroup
  categories:any[]=[]
  course:Course[]=[]

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute, 
    private CategoryService:CategoryService,private router:Router,private courseservice:CourseService) {

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
      this.updateCourseForm = this.fb.group(formControls);
     }
     ngOnInit(): void {
      this.CategoryService.getAllCategory().subscribe(
        (res)=>this.categories=res,
        (err)=>console.log(err)   
      )
      
      let idUser = this.route.snapshot.params.id;
    
      this.courseservice.findCourseById(idUser).subscribe(
        res=>{
          
          this.updateCourseForm.patchValue({
            name : res.name,
            description : res.description,

            price : res.price,
            category: res.category?.id,

            date : res.date,
            tag : res.tag,
            difficulty : res.difficulty,
            estimated_duration : res.estimated_duration,


            instructor : res.instructor,
            image : res.image,

          })
          
        },
        err=>{
          console.log(err);
        }
      )
      
      
    }
    
  
    get name() { return this.updateCourseForm.get('name') }
    get description() { return this.updateCourseForm.get('description') }
    get image() { return this.updateCourseForm.get('image') }
  
    get price() { return this.updateCourseForm.get('price') }
  
  
    get instructor() { return this.updateCourseForm.get('instructor') }
    get date() { return this.updateCourseForm.get('date') }
    get tag() { return this.updateCourseForm.get('tag') }
    get difficulty() { return this.updateCourseForm.get('difficulty') }
    get estimated_duration() { return this.updateCourseForm.get('estimated_duration') }

    get category() { return this.updateCourseForm.get('category') }

  

  updateProduct() {
    let data = this.updateCourseForm.value;
    let course=new Course(this.route.snapshot.params.id,data.name,data.description,data.image,data.price,data.instructor,data.date,data.tag,data.difficulty,data.estimated_duration,new Category(data.category))
    console.log(course)

    this.courseservice.updateCourse(course).subscribe(
      res=>this.router.navigateByUrl("listcourse"),
      err=>console.log(err)
      
    )
  }

}
