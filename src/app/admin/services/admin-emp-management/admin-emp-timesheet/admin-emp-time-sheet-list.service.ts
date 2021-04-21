import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminEmpTimeSheetListService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }

  adminEmpTimesheetList():Observable <any>{
    return this.http.get(this.baseUrl + '/admin_timesheet_list.php')
  }

  adminTimeSheetView(param : any ):Observable <any>{
    return this.http.post(this.baseUrl + '/admin_timesheet_view.php', param)
  }

}



