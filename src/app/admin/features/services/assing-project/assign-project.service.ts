import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssignProjectService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }

  assignProject(param : any ):Observable <any>{
    return this.http.post(this.baseUrl + '/admin_add_assign_project.php', param)
  }

  assignUpdateProject(param : any ):Observable <any>{
    return this.http.post(this.baseUrl + '/admin_update_assign_project.php', param)
  }
}
