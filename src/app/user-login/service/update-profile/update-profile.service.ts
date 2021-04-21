import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {
baseUrl = environment.appRoot;
  constructor(private http : HttpClient) { }

  update_profile(params : any):Observable <any>{
    return this.http.post(this.baseUrl + 'update_profile.php', params);
  }
}
