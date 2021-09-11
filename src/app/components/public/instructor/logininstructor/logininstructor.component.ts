import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/model/instructor';
import { InstructorService } from 'src/app/services/instructor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logininstructor',
  templateUrl: './logininstructor.component.html',
  styleUrls: ['./logininstructor.component.css']
})
export class LogininstructorComponent implements OnInit {
  loginForm: FormGroup

  constructor(private fb: FormBuilder,private instructorservice:InstructorService,private userservice:UserService,private router:Router) {

    let formControls = {
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ])
    }

    this.loginForm = this.fb.group(formControls)
  }


  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  ngOnInit(): void {
    let IsLoggedIn = this.userservice.isLoggedIn();

    if (IsLoggedIn) {
      this.router.navigate(['/instructordashoard']);
    } 
    
  }

  login() {
    let data = this.loginForm.value;

    let instructor = new Instructor(undefined,undefined,undefined,data.email,data.password);

console.log(instructor)
    this.instructorservice.login(instructor).subscribe(
      res=>{
        console.log(res);
        let token = res.token;
        localStorage.setItem("myToken",token);
        console.log(token)

        this.router.navigate(['/instructordashoard']);
      },
      err=>{
        console.log(err);
        
      }
    )
}
}
