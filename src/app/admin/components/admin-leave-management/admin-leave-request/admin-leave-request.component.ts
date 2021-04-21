import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AdminLeaveRequestService } from 'src/app/admin/services/leave-management/admin-leave-request.service';

@Component({
  selector: 'app-admin-leave-request',
  templateUrl: './admin-leave-request.component.html',
  styleUrls: ['./admin-leave-request.component.css']
})
export class AdminLeaveRequestComponent implements OnInit {
  @ViewChild('modelForm') modelForm !: ElementRef;
  leaveListDataLength: any;
  leaveListData: any;
  requestProcessing = true;
 p : number = 1;
 filterType : any
  empId: any;
  selectedButton : any = {}
  constructor(private adminLeaveRequestService : AdminLeaveRequestService) { }

  ngOnInit(): void {
    this.getAllLeaveList();
  }

  getData(id : any, status : any){
    this.empId = id;
   console.log(status);
   
    }
  getAllLeaveList(){
    this.requestProcessing = true;
    this.adminLeaveRequestService.adminLeaveList().subscribe((response)=>{
      this.requestProcessing = false;
      this.leaveListData = response;
      this.leaveListDataLength = this.leaveListData.length
    })
  }
  getProjectId(){
    this.selectedButton[this.empId]= !this.selectedButton[this.empId];
    if(this.empId != null){
        this.modelForm.nativeElement.click();
    }
   }
}
