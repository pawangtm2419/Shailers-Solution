import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { AdminLoginService } from '../service/admin-login/admin-login.service';
import { LoginService } from '../service/login.service';
import { OtpVerifySubjectService } from '../service/otp-verify-behaviourSubject/otp-verify-subject.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  isFooterDisabled = true;
  public error: any;
  public msg: any;
  @Input() emailData?: any;
  loginForm = new FormGroup({
    emp_email: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required])
  });
  email: any;
  forgetForm = new FormGroup({
    emp_email: new FormControl('', [Validators.required])
  });

  public formName = "login";
  @ViewChild('loginFormHide') loginFormHide!: ElementRef;
  @ViewChild('logOutForm') logOutForm!: ElementRef;
  get f() { return this.loginForm.controls; }
  get forget() { return this.forgetForm.controls; }
  constructor(private loginServices: LoginService,
    private route: Router,
    private otpVerifySubjectService: OtpVerifySubjectService,
    private adminLoginService: AdminLoginService
  ) { }

  ngOnInit(): void { }

  login() {
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if (!this.loginForm.valid) {
      return
    }
    let params = this.loginForm.value;
    this.email = params.emp_email;
    let pass = params.pass;
    const formData = new FormData();
    formData.append('emp_email', this.email);
    formData.append('pass', pass);
    let empId = window.localStorage.getItem('emp_id');
    let userId = window.localStorage.getItem('user_type')
    if (this.email == "admin" && empId == null) {
      this.adminLoginService.adminLogin(formData).subscribe((response: any) => {
        this.adminLoginService.setAuth(response);
        if (response.user_type == "admin") {
          setTimeout(() => {
            this.route.navigate(['/shailerscrm/admin/dashboard']);
          }, 1000)
          this.msg = response.msg;
        } else {
          this.error = response.msg;
        }
      })
    }
    else if (userId == null) {
      this.loginServices.loginUser(formData).subscribe(
        (response: any) => {
          this.loginServices.setAuth(response);
          if (response.status == "200") {
            setTimeout(() => {
              this.route.navigate(['/shailerscrm/index/emp-dashboard']);
            }, 1000)
            this.msg = response.msg;
          } else {
            this.error = response.msg;
          }
        },
      );
    }
  }

  toggelForm(formType: any) {
    this.formName = formType
  }

  forget_password() {
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if (!this.forgetForm.valid) {
      return
    }
    let params = this.forgetForm.value;
    let email = params.emp_email;
    const formData = new FormData();
    formData.append('emp_email', email);
    this.loginServices.forgetPassword(formData).subscribe((response: any) => {
      if (response.status == "200") {
        setTimeout(() => {
          this.route.navigate(['/shailerscrm/otp-verify'], { queryParams: { emp_email: email } });
        }, 1000)
        this.msg = response.msg;
      } else {
        this.error = response.msg
      }
    });
  }
}