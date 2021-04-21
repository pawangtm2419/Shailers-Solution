import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendenceInService {
  baseUrl = environment.appRoot;
  constructor(private http : HttpClient) { }

  attendenceIn(params : any):Observable <any>{
    return this.http.post(this.baseUrl + '/attendance_in.php', params)
  }

  setAuth(userResponse : any){
    window.localStorage.setItem("id",userResponse.id);
  }
}
