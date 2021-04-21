import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OldInvoiceService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }

  oldInvoiceData(){
    return this.http.get(this.baseUrl + 'admin_invoice-list.php')
  }
}
