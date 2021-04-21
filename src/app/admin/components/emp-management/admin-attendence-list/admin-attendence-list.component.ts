import { Component, OnInit } from '@angular/core';
import { AdminAttendanceListService } from 'src/app/admin/services/admin-emp-management/admin-attendence-list/admin-attendance-list.service';

@Component({
  selector: 'app-admin-attendence-list',
  templateUrl: './admin-attendence-list.component.html',
  styleUrls: ['./admin-attendence-list.component.css']
})
export class AdminAttendenceListComponent implements OnInit {
  filterTerm: any;
  p: number = 1;
  empAttendanceList : any;
  requestProcessing = true;
  empAttendenceListDataLength: any;
  attendence_intimeLate = "09:47:48"
  attendence_intimeOnTime = "09:30:00"
  constructor( private adminAttendanceListService : AdminAttendanceListService) { }

  ngOnInit(): void {
    this.empAttendenceListData();
  }
  
  empAttendenceListData(){
    this.requestProcessing = true;
    this.adminAttendanceListService.empAttendenceList().subscribe((response: any)=>{
      this.requestProcessing = false;
      this.empAttendanceList = response;
      this.empAttendenceListDataLength = this.empAttendanceList.length;
     })
  }
}
