import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminEmpViewService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }

  empViewDetails(param : any):Observable <any>{
    return this.http.post(this.baseUrl + '/admin_employee_view.php' , param)
  }
}
