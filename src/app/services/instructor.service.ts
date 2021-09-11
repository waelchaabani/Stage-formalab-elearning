import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Instructor } from '../model/instructor';


@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  IsLoggedIn:Boolean;

  private getAllUsersUrl = "http://127.0.0.1:8080/instructor/all";
  private getOneUserUrl = "http://127.0.0.1:8080/instructor/one";
  private getonecategoryUrl = "http://127.0.0.1:8080/instructor/one/";

  private deleteUserUrl = "http://127.0.0.1:8080/utilisateur";
  private addUserUrl = "http://127.0.0.1:8080/utilisateur";
  private updateUserUrl = "http://127.0.0.1:8080/utilisateur";

  private registerUserUrl="http://127.0.0.1:8080/instructor/register";
  private loginUserUrl="http://127.0.0.1:8080/instructor/login";
  private instructorPath = "http://localhost:8080/instructor/"


  constructor(private http: HttpClient) { }

  getAllCategory() {
    return this.http.get<any>(this.getAllUsersUrl)
  }

  getOneUser(id: String) {
    return this.http.get<any>(this.getOneUserUrl + id)
  }

  deleteUser(id: String) {
    return this.http.delete<any>(this.deleteUserUrl + id)
  }

  addUser(instructor: Instructor) {
    return this.http.post<any>(this.addUserUrl, instructor);
  }
  findCourseById(id:any){
    return this.http.get<any>(this.getonecategoryUrl + id);
  }
  findInstructorById(id: any) {
    return this.http.get<any>(this.getOneUserUrl + id);
  }
  updateUser(instructor:Instructor){
    return this.http.put<any>(this.updateUserUrl, instructor);
  }

  //Register & Login

  register(instructor : Instructor){
    return this.http.post<any>(this.registerUserUrl, instructor);
  }

  login(instructor:Instructor){
    return this.http.post<any>(this.loginUserUrl, instructor);
  }

  isLoggedIn() {
    let token = localStorage.getItem('myToken');

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);

      if (decodedToken.role == "instructor") {
        return true;
      } else {
        return false;
      }

    }
    else {
      return false;
    }
  }
  isLoggedInstructor() {
    
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
  updateInstructorState(id: Number) {
    return this.http.patch<any>(this.instructorPath + `updateState/${id}`, {});
  }
  getAllInstructors() {
    return this.http.get<any>(this.instructorPath + "all");
  }

}