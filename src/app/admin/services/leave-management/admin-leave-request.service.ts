import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminLeaveRequestService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }

  adminLeaveList(){
    return this.http.get(this.baseUrl + 'admin_leave_list.php')
  }
}
