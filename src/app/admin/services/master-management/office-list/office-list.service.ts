import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfficeListService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }

  adminOfficeList(){
    return this.http.get(this.baseUrl + 'admin_office_list.php')
  }
}
