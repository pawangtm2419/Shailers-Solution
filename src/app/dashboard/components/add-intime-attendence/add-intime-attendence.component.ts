import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { AttendenceNotifyService } from 'src/app/shared/services/attendence-notify.service';
import { AttendenceInService } from '../../services/attendence-In/attendence-in.service';
import { IpService } from '../../services/ip-service/ip.service';

@Component({
  selector: 'app-add-intime-attendence',
  templateUrl: './add-intime-attendence.component.html',
  styleUrls: ['./add-intime-attendence.component.css']
})
export class AddIntimeAttendenceComponent implements OnInit {
  @Output('attendenceIn') attendenceIn: EventEmitter<String> = new EventEmitter();
  webcamImage: any = WebcamImage;
  trigger: Subject<void> = new Subject<void>();
  formName: any;
  ipAddress: any;
  getIpAddress: any;
  submitted = false;
  isFooterDisabled = true;
  public error: any;
  public msg: any;
  date = new Date();
  todaysDataTime: any;
  currentDate: any;
  attendenceForm = new FormGroup({
    att_intime: new FormControl('', [Validators.required]),
    att_indate: new FormControl('', [Validators.required]),
    pic_intime: new FormControl('', [Validators.required]),
  });



  constructor(private route: Router,
    private attendenceNotifyService: AttendenceNotifyService,
    private attendenceInService: AttendenceInService,
    private ipServices: IpService) { }

  ngOnInit(): void {
    // this.getIP();
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

  submit() {
    alert("Are you sure submit your pick");
    // For current Date purpose Start //
    var dd = String(this.date.getDate()).padStart(2, '0');
    var mm = String(this.date.getMonth() + 1).padStart(2, '0');
    var yyyy = this.date.getFullYear();
    // this.currentDate = dd + '-' + mm + '-' + yyyy;
    this.currentDate = 18-12-2020;
    // For current Date purpose End //
    this.todaysDataTime = formatDate(this.date, 'hh:mm:ss', 'en-US', '+0530');
    // For IP Address purpose Start//
    this.getIP();
    this.attendenceNotifyService.attendenceSubject.next('successfullyAttendenceIn');
    this.route.navigate(['/shailerscrm/index/emp-attendence']);
    // For current Time purpose End//
  }

  getIP() {
    this.ipServices.getIPAddress().subscribe((res: any) => {
      this.getIpAddress = res.ip;
      let pictureInTime = this.webcamImage._imageAsDataUrl;
      let userId: any = window.localStorage.getItem("emp_id");
      const formData = new FormData();
      formData.append('emp_id', userId);
      formData.append('att_intime', this.todaysDataTime);
      formData.append('att_indate', this.currentDate);
      formData.append('pic_intime', pictureInTime);
      formData.append('ip', this.getIpAddress);
      this.attendenceInService.attendenceIn(formData).subscribe((data) => {
        this.attendenceInService.setAuth(data);
        console.log(data);

      }, (error: any) => {
        console.log(error);
      })

    });
  }



}
