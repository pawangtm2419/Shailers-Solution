import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TakeLeaveService {
  baseUrl = environment.appRoot;
  constructor(private http : HttpClient) { }


  take_leave(params : any):Observable <any>{
     return this.http.post(this.baseUrl + '/add_leave.php', params)
  }
}
