import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  IsLoggedIn:Boolean;

  private getAllUsersUrl = "http://127.0.0.1:8080/utilisateur";
  private getOneUserUrl = "http://127.0.0.1:8080/utilisateur";
  private deleteUserUrl = "http://127.0.0.1:8080/utilisateur";
  private addUserUrl = "http://127.0.0.1:8080/utilisateur";
  private updateUserUrl = "http://127.0.0.1:8080/utilisateur";

  private registerUserUrl="http://127.0.0.1:8080/admin/register";
  private loginUserUrl="http://127.0.0.1:8080/admin/login";

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any>(this.getAllUsersUrl);
  }

  getOneUser(id: String) {
    return this.http.get<any>(this.getOneUserUrl + id)
  }

  deleteUser(id: String) {
    return this.http.delete<any>(this.deleteUserUrl + id)
  }

  addUser(admin: Admin) {
    return this.http.post<any>(this.addUserUrl, admin);
  }

  updateUser(admin:Admin){
    return this.http.put<any>(this.updateUserUrl, admin);
  }

  //Register & Login

  register(admin : Admin){
    return this.http.post<any>(this.registerUserUrl, admin);
  }

  login(admin:Admin){
    return this.http.post<any>(this.loginUserUrl, admin);
  }

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
  
}
