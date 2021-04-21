import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  data:any;
  baseUrl = environment.appRoot;
  constructor(private http : HttpClient) { }

  adminLogin(data : any):Observable <any>{
    return this.http.post(this.baseUrl + 'admin_login.php', data);
  }

  setAuth(userResponse : any){
    window.localStorage.setItem("user_type",userResponse.user_type);
  }
}
