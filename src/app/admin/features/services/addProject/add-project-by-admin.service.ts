import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddProjectByAdminService {

  baseUrl = environment.appRoot;
constructor(private http:HttpClient) { }

addProjectData(param : any ):Observable <any>{
  return this.http.post(this.baseUrl + '/admin_add_project.php', param)
}

adminProjectActivity(param : any):Observable <any>{
  return this.http.post(this.baseUrl + '/admin_project_activity.php' , param)
}
}
