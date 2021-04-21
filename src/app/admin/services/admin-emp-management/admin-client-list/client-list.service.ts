import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientListService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }
  
  clientList():Observable <any>{
    return this.http.get(this.baseUrl + '/admin_client_list.php')
  }
  clientsList():Observable <any>{
    return this.http.get(this.baseUrl + '/admin_clients_list.php')
  }

  clientDetails(params : any):Observable<any>{
    return this.http.post(this.baseUrl + '/admin_client_detail.php', params)
  }
  clientsDetails(params : any):Observable<any>{
    return this.http.post(this.baseUrl + '/admin_clients_detail.php', params)
  }
  
}
