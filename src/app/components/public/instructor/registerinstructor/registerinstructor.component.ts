import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/model/instructor';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-registerinstructor',
  templateUrl: './registerinstructor.component.html',
  styleUrls: ['./registerinstructor.component.css']
})
export class RegisterinstructorComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    private fb: FormBuilder,private instructorservice:InstructorService,private router:Router
    ) {

    let formControls = {
      firstname: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      phone: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      profession: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
     
    }

    this.registerForm = this.fb.group(formControls)
  }

  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get profession() { return this.registerForm.get('profession') }



  ngOnInit(): void {
    let isLoggedIn = this.instructorservice.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/instructordashoard']);
    } 
    
  }

register() {

    let data = this.registerForm.value;

    let instructor = new Instructor(undefined,data.firstname,data.lastname,data.email,data.password,data.profession);
    console.log(instructor)

    this.instructorservice.register(instructor).subscribe(
      res=>{
        this.router.navigate(['/logininstructor']);
      },
      err=>{
        console.log(err);
      }
    )
    
  }

}
