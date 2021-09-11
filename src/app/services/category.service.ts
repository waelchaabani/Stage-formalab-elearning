import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private addCategoryurl = "http://127.0.0.1:8080/category/add"
  private getCategoryurl = "http://127.0.0.1:8080/category/all"
  private deletelCategoryurl = "http://127.0.0.1:8080/category/delete"
  private categoryUrl = "http://127.0.0.1:8080/category/";
  private updatecategoryUrl = "http://127.0.0.1:8080/category/update/";
  private getonecategoryUrl = "http://127.0.0.1:8080/category/one/";



  constructor(private http:HttpClient) {
    
   }
   addCategory(category:Category) {
    let token = localStorage.getItem('myToken')
    return this.http.post<any>(this.addCategoryurl, category)
  }
  getAllCategory() {
    return this.http.get<any>(this.getCategoryurl)
  }
  getOneUser(id: String) {
    return this.http.get<any>(this.getonecategoryUrl + id)
  }
  updateUser(category:Category){
    return this.http.put<any>(this.updatecategoryUrl, category);
  }

  deleteCategory(id:any) {
    return this.http.delete<any>(`${this.deletelCategoryurl}/${id}`)
  }
  findCategoryById(id: any) {
    return this.http.get<any>(this.categoryUrl + id);
  }
  updateCategory(category : Category) {
    return this.http.patch<any>(this.categoryUrl + "update", category);
  }
  

}

