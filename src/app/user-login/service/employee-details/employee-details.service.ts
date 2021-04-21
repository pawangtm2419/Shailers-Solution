import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  baseUrl = environment.appRoot;
  constructor(private http : HttpClient) { }

  emp_details(params : any):Observable <any>{
    return this.http.post(this.baseUrl + 'employee.php', params);
  }
}
