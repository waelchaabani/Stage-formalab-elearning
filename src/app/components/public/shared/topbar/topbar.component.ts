import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { InstructorService } from 'src/app/services/instructor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  IsLoggedIn : Boolean ;
  IsLoggedInInstructor:Boolean;
  constructor(private instructorservice:InstructorService,private router :Router,private userservice:UserService
    ) { }

  ngOnInit(): void {
    this.IsLoggedIn = this.userservice.isLoggedIn();
    this.IsLoggedInInstructor = this.userservice.isLoggedInstroctor();

  }

  logout(){
    localStorage.removeItem("myToken");
    this.IsLoggedIn = this.userservice.isLoggedIn();
        this.router.navigate(['/logininstructor']);

  }
}
