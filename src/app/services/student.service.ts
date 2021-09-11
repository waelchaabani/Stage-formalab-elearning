import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  IsLoggedIn:Boolean;

  private getAllUsersUrl = "http://127.0.0.1:8080/instructor/all";
  private getOneUserUrl = "http://127.0.0.1:8080/instructor/one";
  private getonecategoryUrl = "http://127.0.0.1:8080/instructor/one/";

  private deleteUserUrl = "http://127.0.0.1:8080/utilisateur";
  private addUserUrl = "http://127.0.0.1:8080/utilisateur";
  private updateUserUrl = "http://127.0.0.1:8080/utilisateur";

  private registerUserUrl="http://127.0.0.1:8080/students/register";
  private loginUserUrl="http://127.0.0.1:8080/students/login";
  private instructorPath = "http://localhost:8080/students/"


  constructor(private http: HttpClient) { }


  getAllCategory() {
    return this.http.get<any>(this.getAllUsersUrl)
  }

  getOneUser(id: String) {
    return this.http.get<any>(this.getOneUserUrl + id)
  }

  

  //Register & Login

  register(student : Student,file: File){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    
    const formaData = new FormData();
    formaData.append('image', file);
    formaData.append('student', JSON.stringify(student));
    return this.http.post<any>(this.registerUserUrl, student);
  }

  login(student:Student){
    return this.http.post<any>(this.loginUserUrl, student);
  }

  isLoggedIn() {
    let token = localStorage.getItem('myToken');

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);

      if (decodedToken.role == "students") {
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
    return this.http.put<any>(this.instructorPath + `updateState/${id}`, {});
  }
  deleteUser(id: String) {
    return this.http.delete<any>(this.deleteUserUrl + id)
  }
  getAllInstructors() {
    return this.http.get<any>(this.instructorPath + "all");
  }

}

