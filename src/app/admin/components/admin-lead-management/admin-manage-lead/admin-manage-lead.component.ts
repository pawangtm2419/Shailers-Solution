import { Component, OnInit } from '@angular/core';
import { DataSendService } from 'src/app/admin/features/services/form-data-service/data-send.service';
import { ManageLeadService } from 'src/app/admin/services/lead-management/manage-lead/manage-lead.service';

@Component({
  selector: 'app-admin-manage-lead',
  templateUrl: './admin-manage-lead.component.html',
  styleUrls: ['./admin-manage-lead.component.css']
})
export class AdminManageLeadComponent implements OnInit {
  manageLeadListData: any;
  manageLeadListDataLength: any;
  filterTerm : any;
  p: number = 1;
  constructor(private manageLeadService : ManageLeadService,
             private dataSendService : DataSendService) { }

  ngOnInit(): void {
    this.getLeadList();
  }

  getData(data : any){
   this.dataSendService.nextLeadObject.next(data);
   console.log(data);
  }

  getLeadList(){
    this.manageLeadService.manageLeadList().subscribe((response)=>{
      this.manageLeadListData = response;
     this.manageLeadListDataLength = this.manageLeadListData.length;
    })
  }

}
