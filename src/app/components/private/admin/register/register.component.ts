import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    private fb: FormBuilder,private studentService:StudentService,private router:Router    ) {

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
      photo: new FormControl('',[
        Validators.required,
      ]),
     
    }

    this.registerForm = this.fb.group(formControls)
  }

  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get photo () { return this.registerForm.get('photo') }

  


  ngOnInit(): void {
    let isLoggedIn = this.studentService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/home']);
    } 
    
  }

register() {

    let data = this.registerForm.value;
    let file = data.image as File;

    let student = new Student(undefined,data.firstname,data.lastname,data.email,data.password,data.photo);
    console.log(student)

    this.studentService.register(student,file).subscribe(
      res=>{
        this.router.navigate(['/login']);
      },
      err=>{
        console.log(err);
      }
    )
    

}
}
