import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendenceListService {
  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }

  attendence_list(params : any):Observable <any>{
    return this.http.post(this.baseUrl + '/attendance_list.php', params)
  }

}
