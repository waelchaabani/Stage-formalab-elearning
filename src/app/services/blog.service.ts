import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private productUrl = "http://localhost:8080/blog/";
  private getonecategoryUrl = "http://127.0.0.1:8080/blog/one/";

  constructor(private http:HttpClient) { }


  addCourse(blog:any){
    return this.http.post<any>(this.productUrl + 'add',blog);
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
  updateCourse(blog:any){
    return this.http.patch<any>(this.productUrl + 'update',blog)
  }
  findByid(id){
   
    return this.http.get("http://localhost:3000/courses/"+id)
  }
  
  deleteCourse(id: any){
    return this.http.delete<any>(this.productUrl + `delete/${id}`)
  }}

