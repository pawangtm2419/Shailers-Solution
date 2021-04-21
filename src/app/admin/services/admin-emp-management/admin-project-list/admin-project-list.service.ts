import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminProjectListService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }
  
  adminProjectList():Observable <any>{
    return this.http.get(this.baseUrl + '/admin_project_list.php')
  }

  adminProjectView(param : any ):Observable <any>{
    return this.http.post(this.baseUrl + '/admin_project_view.php', param)
  }
}
