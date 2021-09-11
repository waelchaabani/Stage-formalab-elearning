import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  loginForm: FormGroup

  constructor(private fb: FormBuilder,private adminservice:AdminService,private router:Router,private userservice:UserService) {


    let formControls = {
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(7)
      ])
    }

    this.loginForm = this.fb.group(formControls)
  }


  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  ngOnInit(): void {
    let IsLoggedIn = this.userservice.isLoggedIn();

    if (IsLoggedIn) {
      this.router.navigate(['/dashboard']);
    } 
    
  }

  login() {
    let data = this.loginForm.value;

    let admin = new Admin(undefined,undefined,undefined,data.email,data.password);

console.log(admin)
    this.adminservice.login(admin).subscribe(
      res=>{
        console.log(res);
        let token = res.token;
        localStorage.setItem("myToken",token);
        this.router.navigate(['/dashboard']);
      },
      err=>{
        console.log(err);
        
      }
    )
}

}
