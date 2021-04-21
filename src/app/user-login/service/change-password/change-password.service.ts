import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  baseUrl = environment.appRoot;
  constructor(private http : HttpClient) { }
  
  changePassword(data : any): Observable<any>{
    return this.http.post(this.baseUrl + 'change_password.php', data);
  }
}
