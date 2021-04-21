import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalManager } from 'ngb-modal';
import { AddTimeSheetService } from '../../services/addtime-sheet/add-time-sheet.service';
import { ProjectListService } from '../../services/project-list/project-list.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { ConfirmationService } from '../../services/confirmation.service';

@Component({
  selector: 'app-add-timesheet',
  templateUrl: './add-timesheet.component.html',
  styleUrls: ['./add-timesheet.component.css']
})
export class AddTimesheetComponent implements OnInit {
  @ViewChild('startTimeTable') startTimeTable!: ElementRef;
  @ViewChild(' confirmModel') confirmModel!: ElementRef;
  private confirmmodalRef?: MatDialogRef<ConfirmationComponent>;

  totalProjectData: any;
  msg: null;
  error: null;
  submitted: any;
  inputOutTime: any;
  inputInTime: any;
  addTimeSheetData: any = [];

  timeSheetForm = new FormGroup({
    pro_name: new FormControl('', [Validators.required]),
    activity: new FormControl('', [Validators.required]),
    strt_time: new FormControl('', [Validators.required]),
    end_time: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    descp: new FormControl('', [Validators.required]),
  });
  formName = 'addForm';
  totalWorkingTime: any;
  todayDate: any;

  constructor(private projectListService: ProjectListService,
    private addTimeSheetService: AddTimeSheetService,
    private modalService: NgbModal,
    private dialog: MatDialog,
    private confirmationService: ConfirmationService
  ) { }


  get f() { return this.timeSheetForm.controls; }

  ngOnInit(): void {
    this.getTotalProjectList();
  }


  open() {
    const modalRef = this.modalService.open('');
    modalRef.componentInstance.name = 'World';
  }
  getTotalProjectList() {
    let userId: any = window.localStorage.getItem("emp_id")
    const formData = new FormData();
    formData.append('emp_id', userId);
    this.projectListService.totalProjectList(formData).subscribe((data) => {
      this.totalProjectData = data;
    })
  }

  openStartTimeTable() {
    let tagName = this.startTimeTable.nativeElement.classList;
    if (tagName.contains('open')) {
      tagName.remove('open')
    } else {
      tagName.add('open')
    }
  }

  openDialog() {
    this.confirmmodalRef = this.dialog.open(ConfirmationComponent)
    this.confirmmodalRef.componentInstance.status.subscribe((data: any) => {
      if (data == 'submit') {
        this.submit();
      }
    });
  }
  resetData() {
    this.addTimeSheetData = [];
    this.timeSheetForm.reset();
  }
  addTimeSheetForm() {
    this.msg = null;
    this.error = null;
    this.submitted = true;

    if (!this.timeSheetForm.valid) {
      return
    }
    let userId: any = window.localStorage.getItem('emp_id');
    let params = this.timeSheetForm.value;
    let dateEnd = new Date();
    var dd = String(dateEnd.getDate()).padStart(2, '0');
    var mm = String(dateEnd.getMonth() + 1).padStart(2, '0');
    var yyyy = dateEnd.getFullYear();
    this.todayDate = dd + '/' + mm + '/' + yyyy;
   
    params.hours = this.totalWorkingTime;
    params.datetime = this.todayDate;
    params.emp_id = userId;
    this.addTimeSheetData.push(params);
    this.timeSheetForm.reset();
    this.submitted = false
  }

onTimeChange(){
  let dateEnd = new Date();
  this.inputInTime = this.timeSheetForm.get('strt_time')?.value;
  this.inputOutTime = this.timeSheetForm.get('end_time')?.value;
  if(this.inputInTime  && this.inputOutTime){
    var resstart = this.inputInTime.split(':');
  var resend = this.inputOutTime.split(':');
  var shourmili=resstart[0]*3600;
  var sminutmili=resstart[1]*60;
  var ehourmili=resend[0]*3600;
  var eminutmili=resend[1]*60;
  var strattime=shourmili+sminutmili;
  var endtime=ehourmili+eminutmili;
  var difference = endtime - strattime;
  var timeOnee=difference/3600;
  var timeTwo=difference%3600;
  var timeOne = parseInt(timeOnee.toString());
  var timeTwo = parseInt(timeTwo.toString());
  timeTwo=timeTwo/60;
  this.totalWorkingTime = timeOne+":"+timeTwo;
  
  }
 
}

  submit() {
    this.addTimeSheetData.forEach((params: any) => {
      const formData = new FormData();
      formData.append('pro_name', params.pro_name);
      formData.append('emp_id', params.emp_id);
      formData.append('activity', params.activity);
      formData.append('strt_time', params.strt_time);
      formData.append('end_time', params.end_time);
      formData.append('hours', params.hours);
      formData.append('status', params.status);
      formData.append('descp', params.descp);
      formData.append('datetime', params.datetime);
      this.formApiData(formData);

    });
    this.resetData();
  }

  formApiData(formData: any) {
    this.addTimeSheetService.addTimeSheet(formData).subscribe(
      (response: any) => {
        console.log(response);

      },
      (error: any) => {
        this.error = error.error
      });
  }

  updateForm(formType: any) {
    this.formName = formType;
  }
}
