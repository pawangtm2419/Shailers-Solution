import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageActivityService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }

  addActivity(data:any):Observable <any>{
    return this.http.post(this.baseUrl + 'admin_add_activity.php' , data)
  }

  activityData():Observable <any>{
    return this.http.get(this.baseUrl + 'admin_activity_list.php')
  }

  activityAssignData():Observable <any>{
    return this.http.get(this.baseUrl + 'admin_assign_activity_list.php')
  }

  deletActivity(data:any):Observable <any>{
    return this.http.post(this.baseUrl + 'admin_delete_activity.php' , data)
  }

  assignActivity(param : any):Observable <any>{
    return this.http.post(this.baseUrl + 'admin_assign_activity.php', param)
  }

  assignActivityUpdate(param : any):Observable <any>{
    return this.http.post(this.baseUrl + 'admin_assign_activity_update.php', param)
  }
}
