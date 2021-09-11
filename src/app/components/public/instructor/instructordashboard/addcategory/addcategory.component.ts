import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  public addCategoryForm: FormGroup


  constructor(private fb: FormBuilder,private http :HttpClient,private router:Router,private categoryservice:CategoryService) {
    

    let formControls = {
      name: new FormControl('', [
        Validators.required,
      ]),
      image: new FormControl('',[
      ])
      
    }

    this.addCategoryForm = fb.group(formControls);
  }

  get name() { return this.addCategoryForm.get('name'); }
  get image() { return this.addCategoryForm.get('image') }


  ngOnInit(): void {
  }

  saveCategory(){
    console.log(this.addCategoryForm.value);
  
 let data= this.addCategoryForm.value;
 let category =new Category(undefined,data.name,data.image);
 this.categoryservice.addCategory(data).subscribe(
  (res) => {
    this.router.navigateByUrl('/listcategory')
  },
  
  (error) => { console.log(error) }
)
 }

}
