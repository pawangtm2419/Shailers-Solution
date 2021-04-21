import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AttendenceNotifyService } from 'src/app/shared/services/attendence-notify.service';
import { ProjectcountdetailsService } from 'src/app/shared/services/projectcountdetails.service';

@Component({
  selector: 'app-project-stats',
  templateUrl: './project-stats.component.html',
  styleUrls: ['./project-stats.component.css']
})
export class ProjectStatsComponent implements OnInit {

  dateToday: number = Date.now();
  formName = "attendenceNotMarked";
  totalProject : any;
  totalOngoingProject: any;
  totalDealyProject: any;
  totalCompleteProject: any;
  date = new Date();
  @ViewChild('sidenave') sidenave!: ElementRef;
  todaysDataTime: any;
  constructor(private projectcountdetailsService:ProjectcountdetailsService,
     private route : Router,private attendenceNotifyService:AttendenceNotifyService ) { 
    setInterval(() => {this.dateToday = Date.now()}, 1);
  }

  ngOnInit(): void {
    this.gettotalProject();
    this.getOnGoingProject();
    this.getDealyProject();
    this.getCompleteProject();
    this.addAttendenceData();
  }


  // Start coding for daseboard
  confirm_in(formType : any){
    alert("Are you sure you want to mark in your attendance ?");
    this.formName = formType;
    this.route.navigate(['/shailerscrm/index/add-intime-attendence']);

  }

  confirm_out(formType : any){
    alert("Are you sure you want to mark out your attendance ?");
    this.formName = formType;
    this.todaysDataTime = formatDate(this.date, 'hh:mm:ss', 'en-US', '+0530');
    this.route.navigate(['/shailerscrm/index/add-out-time-attendence']);

  }

  gettotalProject(){
    let userId : any = window.localStorage.getItem("emp_id")
    const formData = new FormData();
    formData.append('emp_id', userId);
    this.projectcountdetailsService.totalProject(formData).subscribe((data)=>{
   this.totalProject = data[0].total_project;
   })
  }

  getOnGoingProject(){
    let userId : any = window.localStorage.getItem("emp_id")
    const formData = new FormData();
    formData.append('emp_id', userId);
    this.projectcountdetailsService.onGoingProject(formData).subscribe((data)=>{
   this.totalOngoingProject = data[0].onging_total;
   })
  }

  getCompleteProject(){
    let userId : any = window.localStorage.getItem("emp_id")
    const formData = new FormData();
    formData.append('emp_id', userId);
    this.projectcountdetailsService.completeProject(formData).subscribe((data)=>{
   this.totalCompleteProject = data[0].complete_project;
   })
  }

  getDealyProject(){
    let userId : any = window.localStorage.getItem("emp_id")
    const formData = new FormData();
    formData.append('emp_id', userId);
    this.projectcountdetailsService.dealyProject(formData).subscribe((data)=>{
   this.totalDealyProject = data[0].delay_project;
   })
  }
 
  addAttendenceData(){
    this.attendenceNotifyService.attendenceSubject.subscribe((data)=>{  
      this.formName = data;
    })
  }

// End coding for daseboard

}
