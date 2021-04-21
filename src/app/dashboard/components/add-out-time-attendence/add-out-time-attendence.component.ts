import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { AttendenceOutService } from '../../services/attendence-out/attendence-out.service';
import { EmpAttendenceDetailsService } from '../../services/emp-attendence-details/emp-attendence-details.service';

@Component({
  selector: 'app-add-out-time-attendence',
  templateUrl: './add-out-time-attendence.component.html',
  styleUrls: ['./add-out-time-attendence.component.css']
})
export class AddOutTimeAttendenceComponent implements OnInit {
  webcamImage: any = WebcamImage;
  trigger: Subject<void> = new Subject<void>();
  formName: any;
 
  submitted = false;
  isFooterDisabled = true;
  public error: any;
  public msg: any;
  date = new Date();
  todaysDataTime: any;
  currentDate: any;
  attendenceOutForm = new FormGroup({
    att_outdate: new FormControl('', [Validators.required]),
    att_outtime: new FormControl('', [Validators.required]),
    emp_id: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
  });
  constructor(private attendenceOutService:AttendenceOutService,
              private empAttendenceDetailsService:EmpAttendenceDetailsService) { }

  ngOnInit(): void {
    
  }

  triggerSnapshot(formType: any): void {
    this.trigger.next();
    this.formName = formType
  }
  handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  submit(){
     // For current Date purpose Start //
     var dd = String(this.date.getDate()).padStart(2, '0');
     var mm = String(this.date.getMonth() + 1).padStart(2, '0');
     var yyyy = this.date.getFullYear();
    //  this.currentDate = dd + '-' + mm + '-' + yyyy;
     this.currentDate = 20-12-2010;
     // For current Date purpose End //
     this.todaysDataTime = formatDate(this.date, 'hh:mm:ss', 'en-US', '+0530');
     let userId: any = window.localStorage.getItem("emp_id");
     let pictureOutTime = this.webcamImage._imageAsDataUrl;
     let id : any = window.localStorage.getItem("id");
     const formData = new FormData();
     formData.append('att_outdate', this.currentDate);
     formData.append('att_outtime',this.todaysDataTime);
     formData.append('emp_id', userId);
     formData.append('pic_outtime', pictureOutTime);
     formData.append('id', id);
     this.attendenceOutService.attendenceOut(formData).subscribe((data)=>{
      console.log(data);
      
     });
  }

 
}
