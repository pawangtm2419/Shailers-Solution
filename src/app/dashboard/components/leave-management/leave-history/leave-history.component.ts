import { Component, OnInit } from '@angular/core';
import { LeaveListService } from '../service/leave-list.service';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {
  allLeaveList: any;
  allLeaveListTotalLength: any;
  filterTerm: any;
  p: number = 1;

  constructor(private leaveListService: LeaveListService) { }

  ngOnInit(): void {
    this.getLeaveList();
  }

  getLeaveList(){
    let userId : any = window.localStorage.getItem("emp_id")
    const formData = new FormData();
    formData.append('emp_id', userId);
    this.leaveListService.leaveList(formData).subscribe((data)=>{
   this.allLeaveList = data;
   this.allLeaveListTotalLength = data.length;
   })
  }

}
