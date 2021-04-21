import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data:any;
  baseUrl = environment.appRoot;
  constructor(private http : HttpClient) { }

  loginUser(data : any):Observable <any>{
    return this.http.post(this.baseUrl + 'login.php', data);
  }

  setAuth(userResponse : any){
    window.localStorage.setItem("emp_id",userResponse.emp_id);
  }

  
  forgetPassword(data : any): Observable<any>{
    return this.http.post(this.baseUrl + 'forgot_password.php', data);
  }
  
 
}
