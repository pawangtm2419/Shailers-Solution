import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddNewOfficeService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }
  
  addOfficeData(param : any ):Observable <any>{
    return this.http.post(this.baseUrl + '/admin_add_office.php', param)
  }
}
