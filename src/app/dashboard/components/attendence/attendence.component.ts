import { formatDate } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AttendenceNotifyService } from 'src/app/shared/services/attendence-notify.service';
import { AttendenceListService } from '../../services/attendencs-list/attendence-list.service';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {
  // attendenceList = "attendenceIn";
  formName = "attendenceNotMarked";
  allAttendenceList: any;
  allAttendenceListDetails= "open";
  dateFind : any;
  filterTerm: any;
  p: number = 1;
  date = new Date();
  allAttendenceListTotalLength: any;
  todaysDataTime: any;
  requestProcessing = true;
  @ViewChild('empDetails') empDetails!: ElementRef;
  
  constructor(private attendenceListService : AttendenceListService,
    private attendenceNotifyService:AttendenceNotifyService,
    private route : Router) { 
  }

  @Input('sortable-column')
  columnName: any;

  @Input('sort-direction')
  sortDirection: string = '';

  @HostListener('click')
  sort() {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  ngOnInit(): void {
    this.getAttendenceList();
    this.addAttendenceData();
  }

  confirm_in(attendenceType : any){
    alert("Are you sure you want to mark in your attendance ?");
    this.formName = attendenceType;
    this.route.navigate(['/shailerscrm/index/add-intime-attendence']);
  }

  confirm_out(attendenceType : any){
    alert("Are you sure you want to mark out your attendance ?");
    this.formName = attendenceType;
    this.todaysDataTime = formatDate(this.date, 'hh:mm:ss', 'en-US', '+0530');
     this.route.navigate(['/shailerscrm/index/add-out-time-attendence']);

  }


  openEmployDetails(event : any,elemeniId :any) {
    let eventData  = event.target;
   
    // if(eventData.classList.contains('details-close-text')){
    //   eventData.classList.remove('details-close-text')
    //   eventData.classList.add('details-open-text')
    //   eventData.classList.remove('plus-text')
    //   eventData.classList.add('minus-text')
    //   eventData.innerHTML = "+"
    // }else{
    //   eventData.classList.remove('details-open-text')
    //   eventData.classList.add('details-close-text')
    //   eventData.classList.add('plus-text');
    //   eventData.classList.remove('minus-text');
    //   eventData.innerHTML = "-"
    // }
   let data= document.getElementById('emp_' + elemeniId);
     let tagName = data?.classList;
    if (tagName?.contains('close')) {
      tagName.remove('close')
    } else {
      tagName?.add('close')
    }
    // this.allAttendenceListDetails = attendenceColorType;
  }

  getAttendenceList(){
    let userId : any = window.localStorage.getItem("emp_id")
    const formData = new FormData();
    formData.append('emp_id', userId);
    this.requestProcessing = true
    this.attendenceListService.attendence_list(formData).subscribe((data)=>{
   this.allAttendenceList = data;
   this.requestProcessing = false;  
   this.allAttendenceListTotalLength = data.length;
   })
  }

  addAttendenceData(){
    this.attendenceNotifyService.attendenceSubject.subscribe((data)=>{  
      this.formName = data;
    })
  }


}
