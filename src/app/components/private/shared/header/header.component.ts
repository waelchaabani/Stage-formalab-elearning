import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  IsLoggedIn : Boolean ;

  constructor(private adminService:AdminService,private router :Router
    ) { }

  ngOnInit(): void {
    this.IsLoggedIn = this.adminService.isLoggedIn();
  }

  logout(){
    localStorage.removeItem("myToken");
    this.router.navigate(['/login-admin']);

  }

}
