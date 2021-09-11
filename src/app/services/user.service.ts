import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }
  
  isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
    
  }
  isLoggedAdmin() {
    let token = localStorage.getItem('myToken')

    if (token) {

      const helper = new JwtHelperService();

      const decodedToken = helper.decodeToken(token);

      if (decodedToken.data.role == "admin") {
        return true
      } else {
        return false
      }

    } else {
      return false
    }
  }

  isLoggedInstroctor() {
    
    let token = localStorage.getItem('myToken')
    console.log(token)

    if (token) {
      const helper = new JwtHelperService();

      const decodedToken = helper.decodeToken(token);
      console.log(decodedToken)

      if (decodedToken.data.role == "instructor") {
        return true
      } else {
        return false
      }

    } else {
      return false
    }
  }


}
