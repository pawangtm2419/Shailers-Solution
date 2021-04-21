import { Component, OnInit } from '@angular/core';
import { OfficeListService } from 'src/app/admin/services/master-management/office-list/office-list.service';

@Component({
  selector: 'app-admin-office-list',
  templateUrl: './admin-office-list.component.html',
  styleUrls: ['./admin-office-list.component.css']
})
export class AdminOfficeListComponent implements OnInit {
  officeList: any;
  officeListLength: any;

  constructor(private officeListService : OfficeListService) { }

  ngOnInit(): void {
    this.grtOfficeList();
  }

  grtOfficeList(){
    this.officeListService.adminOfficeList().subscribe((response)=>{
      this.officeList = response;
      this.officeListLength = this.officeList.length
    })
  }

}
