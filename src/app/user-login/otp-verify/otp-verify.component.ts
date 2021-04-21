import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OtpVerifySubjectService } from '../service/otp-verify-behaviourSubject/otp-verify-subject.service';
import { OtpVerifyService } from '../service/otp-verify/otp-verify.service';
import { ResendOtpService } from '../service/resend-otp/resend-otp.service';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.css']
})
export class OtpVerifyComponent implements OnInit {

  email: any;
  submitted = false;
  isFooterDisabled = true;
  public error: any;
  public msg: any;
  otpForm = new FormGroup({
   
    otp: new FormControl('', [Validators.required])
  });
  get f() { return this.otpForm.controls; }
  constructor(private otpVerifyService: OtpVerifyService,
    private route: Router,
    private otpVerifySubjectService: OtpVerifySubjectService,
    private resendOtpService: ResendOtpService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.email = this.router.snapshot.queryParamMap.get('emp_email')
  }

  otpSubmit() {
     this.msg = null;
    this.error = null;
    this.submitted = true;
    if (!this.otpForm.valid) {
      return
    }
    let params = this.otpForm.value;
   
    let otp = params.otp;
    const formData = new FormData();
    formData.append('emp_email', this.email);
    formData.append('otp', otp);
   
    this.otpVerifyService.otpVerify(formData).subscribe((response) => {
      if (response.status == "200") {
        this.msg = response.msg;
        setTimeout(() => {
          this.route.navigate(['/shailerscrm/change-password']);
        }, 4000)
      } else {
        this.error = response.msg;
        console.log( this.error);
        
      }
    })
  }

  reSendOtp() {
    this.msg = null;
    this.error = null;
    const formData = new FormData();
    formData.append('emp_email', this.email);
    this.resendOtpService.resendOtp(formData).subscribe((response) => {
      console.log(response);

      if (response.status == "200") {
        this.msg = response.msg;
      } else if (response.status == "201") {
        this.error = response.msg
      }
    },
      (error: any) => {
        this.error = error;
        console.log(this.error);

      })
  }

}
