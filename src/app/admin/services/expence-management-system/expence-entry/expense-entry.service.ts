import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseEntryService {

  
  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }
  
  allExpenseName():Observable <any>{
    return this.http.get(this.baseUrl + 'admin_expense_entry_list.php')
  }
   
  expenseList():Observable <any>{
    return this.http.get(this.baseUrl + 'admin_expense_list.php')
  }
   
  addExpenseEntry(param : any):Observable<any>{
    return this.http.post(this.baseUrl + 'admin_expense_entry_add.php' , param)
  }
}
