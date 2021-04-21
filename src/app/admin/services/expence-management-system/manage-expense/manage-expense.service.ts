import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageExpenseService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }

  allExpenseData():Observable <any>{
    return this.http.get(this.baseUrl + 'admin_expense_list.php')
  }

  addExpense(param:any):Observable <any>{
    return this.http.post(this.baseUrl + 'admin_add_expense.php' , param)
  }

  updateExpense(param: any):Observable <any>{
    return this.http.post(this.baseUrl + 'admin_update_expense.php' , param)
  }


}
