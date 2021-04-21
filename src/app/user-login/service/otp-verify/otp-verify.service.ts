import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OtpVerifyService {

  baseUrl = environment.appRoot;
  constructor(private http : HttpClient) { }

  
  otpVerify(data : any): Observable<any>{
    return this.http.post(this.baseUrl + 'forgot_otp_verify.php', data);
  }

 
}
