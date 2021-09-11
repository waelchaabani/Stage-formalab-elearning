import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {

  updateCategoryForm: FormGroup
  constructor(private fb: FormBuilder, private categoryservice: CategoryService, private route: ActivatedRoute, private router: Router) {
    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      image: new FormControl('',[
      ])
      
    }
    this.updateCategoryForm = this.fb.group(formControls);
   }
   get name() { return this.updateCategoryForm.get('name') }
  get image() { return this.updateCategoryForm.get('image') }

   ngOnInit(): void {

    let idUser = this.route.snapshot.params.id;
    
    this.categoryservice.getOneUser(idUser).subscribe(
      res=>{
        let category = res;

        this.updateCategoryForm.patchValue({
          name : category.name,
          image : category.image
        })
        
      },
      err=>{
        console.log(err);
      }
    )
    
  }

  updateCategory() {
    let data = this.updateCategoryForm.value;
    let idCategory = this.route.snapshot.params.id;
    let category = new Category(data.name,data.image,idCategory);

    this.categoryservice.updateUser(category).subscribe(
      res=>{

        this.router.navigate(['/listcategory']);
      },
      err=>{
        console.log(err);
      }
    )

  }

}
