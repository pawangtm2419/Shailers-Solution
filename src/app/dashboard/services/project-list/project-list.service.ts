import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  baseUrl = environment.appRoot;
  constructor(private http : HttpClient) { }

  totalProjectList(params : any):Observable <any>{
    return this.http.post(this.baseUrl + '/project_list.php', params)
  }

}
