import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminAssignProjectListService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }
  
  adminAssignProject():Observable <any>{
    return this.http.get(this.baseUrl + '/admin_assign_project_list.php')
  }

  adminAssignUpdateProject(param : any):Observable <any>{
    
    return this.http.get(this.baseUrl + '/admin_assign_project_list.php', param)
  }
}
