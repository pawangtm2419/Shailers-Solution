import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminManageEmpService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }

  adminEmpList():Observable <any>{
    return this.http.get(this.baseUrl + '/admin_employee_list.php')
  }
}
