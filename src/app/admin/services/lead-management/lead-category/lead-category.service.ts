import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeadCategoryService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }
  
  leadList(){
    return this.http.get(this.baseUrl + 'admin_lead_category_list.php')
  }
  addLeadCategory(param : any):Observable <any>{
    return this.http.post(this.baseUrl + 'admin_lead_category_add.php' , param)
  }

  deleteCategory(param : any): Observable<any>{
    return this.http.post(this.baseUrl + 'admin_lead_category_delete.php' , param)
  }
}
