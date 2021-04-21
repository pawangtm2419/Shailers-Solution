import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimeSheetService {
  timeSheetData = new BehaviorSubject<any>({});
  baseUrl = environment.appRoot;
  constructor(private http : HttpClient) { }

  
  totalTimeSheetList(params : any):Observable <any>{
    return this.http.post(this.baseUrl + '/timesheet_list.php', params)
  }
}
