import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageLeadService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }

  manageLeadList(){
    return this.http.get(this.baseUrl + 'admin_lead_list.php')
  }

  addManngeLead(param : any):Observable<any>{
    return this.http.post(this.baseUrl + 'admin_lead_add.php', param)
  }
}
