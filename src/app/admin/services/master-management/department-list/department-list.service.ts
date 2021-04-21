import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentListService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }
  
  departmentList():Observable <any>{
    return this.http.get(this.baseUrl + '/admin_department_list.php')
  }

  addDepartMent(param : any):Observable<any>{
    return this.http.post(this.baseUrl + 'admin_add_department.php', param);
  }
}
