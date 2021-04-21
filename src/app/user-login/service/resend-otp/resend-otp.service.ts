import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResendOtpService {

  baseUrl = environment.appRoot;
  constructor(private http : HttpClient) { }
  
  resendOtp(data : any): Observable<any>{
    return this.http.post(this.baseUrl + 'resend_otp.php', data);
  }
}
