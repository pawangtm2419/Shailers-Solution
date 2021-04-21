import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminProfileService {

  baseUrl = environment.appRoot;
  constructor(private http : HttpClient) { }

  
  adminDetails():Observable <any>{
    return this.http.get(this.baseUrl + '/admin_profile.php')
  }
}
