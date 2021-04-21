import { Component, OnInit } from '@angular/core';
import { OldInvoiceService } from 'src/app/admin/services/invoice-management/old-invoice-management/old-invoice.service';

@Component({
  selector: 'app-admin-old-invoice',
  templateUrl: './admin-old-invoice.component.html',
  styleUrls: ['./admin-old-invoice.component.css']
})
export class AdminOldInvoiceComponent implements OnInit {
  oldInvoiceData: any;
  oldInvoiceDataLength: any;
  filterTerm: any;
  p: number = 1;

  constructor(private oldInvoiceService : OldInvoiceService) { }

  ngOnInit(): void {
    this.oldInvoiceList();
  }

  oldInvoiceList(){
    this.oldInvoiceService.oldInvoiceData().subscribe((response)=>{
      this.oldInvoiceData = response;
      this.oldInvoiceDataLength = this.oldInvoiceData.length;
    })
  }

}
