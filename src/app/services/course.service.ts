import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private productUrl = "http://localhost:8080/courses/";
  private getonecategoryUrl = "http://127.0.0.1:8080/courses/one/";

  constructor(private http:HttpClient) { }


  addCourse(course:any){
    return this.http.post<any>(this.productUrl + 'add',course);
  }
  findAllCourse(){
    return this.http.get<any>(this.productUrl + 'all');
  }
  findCourseById(id:any){
    return this.http.get<any>(this.getonecategoryUrl + id);
  }
  getOneUser(id: String) {
    return this.http.get<any>(this.getonecategoryUrl + id)
  }
  updateCourse(course:any){
    return this.http.patch<any>(this.productUrl + 'update',course)
  }
  findByid(id){
   
    return this.http.get("http://localhost:3000/courses/"+id)
  }
  updateCategory(course : Course) {
    return this.http.patch<any>(this.productUrl + "update", course);
  }
  deleteCourse(id: any){
    return this.http.delete<any>(this.productUrl + `delete/${id}`)
  }}
