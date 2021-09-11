import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/model/instructor';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  registerForm: FormGroup

  constructor(private fb: FormBuilder,private instructorservice:InstructorService,private router:Router) {

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
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\.#?!@$%^&*-]).{0,}$"),
        Validators.minLength(8)
      ]),
      repassword: new FormControl('',[

        Validators.required,
      ])
    }

    this.registerForm = this.fb.group(formControls)
  }

  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get repassword() { return this.registerForm.get('repassword') }

  ngOnInit(): void {
    let isLoggedIn = this.instructorservice.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['home']);
    } 
  }

  register() {

    let data = this.registerForm.value;

    let instructor = new Instructor(undefined,data.firstname,data.lastname,data.email,data.password);
    console.log(instructor)

    this.instructorservice.register(instructor).subscribe(
      res=>{
        this.router.navigate(['/login']);
      },
      err=>{
        console.log(err);
      }
    )
    
  }
  

}
