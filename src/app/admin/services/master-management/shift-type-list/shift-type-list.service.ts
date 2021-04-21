import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShiftTypeListService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }

  adminShifTypetList(){
    return this.http.get(this.baseUrl + 'admin_shift_type_list.php')
  }

  addShiftType(param : any):Observable <any>{
    return this.http.post(this.baseUrl + 'admin_add_shift_type.php' , param)
  }

  adminShifList(){
    return this.http.get(this.baseUrl + 'admin_shift_list.php')
  }

  shiftDetails(param : any):Observable <any>{
    return this.http.post(this.baseUrl + 'admin_shift_detail.php' , param)
  }


}
