import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,  private router: Router,private studentService:StudentService) {
    let token = localStorage.getItem('myToken');
    

    let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    }

    this.loginForm = fb.group(formControls);
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }


  ngOnInit(): void {
    let IsLoggedIn = this.studentService.isLoggedIn();

    if (IsLoggedIn) {
      this.router.navigate(['/home']);
    } 
  }
    login() {
      let data = this.loginForm.value;
  
      let student = new Student(undefined,undefined,undefined,data.email,data.password);
  
  console.log(student)
      this.studentService.login(student).subscribe(
        res=>{
          console.log(res);
          let token = res.token;
          localStorage.setItem("myToken",token);
          console.log(token)
  
          this.router.navigate(['/home']);
        },
        err=>{
          console.log(err);
          
        }
      )
  }
  }

  

    
    

  

