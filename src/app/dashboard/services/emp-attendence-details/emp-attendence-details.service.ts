import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpAttendenceDetailsService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }

  empAttendenceDetails(params : any):Observable <any>{
    return this.http.get(this.baseUrl + '/emp-attendance-api.php', params)
  }
}
