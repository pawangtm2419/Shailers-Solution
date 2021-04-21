import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DomainManagementService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }

  adminDomainList(){
    return this.http.get(this.baseUrl + 'admin_domain_data.php')
  }

  domainDetails(params : any):Observable<any>{
    return this.http.post(this.baseUrl + 'admin_domain_data_detail.php' , params)
  }
}
