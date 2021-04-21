import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectcountdetailsService {
  baseUrl = environment.appRoot;
 
  constructor(private http : HttpClient) { }
  
 totalProject(params : any):Observable <any>{
   return this.http.post(this.baseUrl + '/total_project.php', params)
 }

 onGoingProject(params : any):Observable <any>{
  return this.http.post(this.baseUrl + '/ongoing_project.php', params)
}

completeProject(params : any):Observable <any>{
  return this.http.post(this.baseUrl + '/complete_project.php', params)
}

dealyProject(params : any):Observable <any>{
  return this.http.post(this.baseUrl + '/delay_project.php', params)
}
}
