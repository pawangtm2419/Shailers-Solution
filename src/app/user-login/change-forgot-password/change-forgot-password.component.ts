import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeForgotPasswardService } from '../service/change-fogot-password/change-forgot-passward.service';

@Component({
  selector: 'app-change-forgot-password',
  templateUrl: './change-forgot-password.component.html',
  styleUrls: ['./change-forgot-password.component.css']
})
export class ChangeForgotPasswordComponent implements OnInit {

  submitted = false;
  isFooterDisabled = true;
  public error: any;
  public msg: any;
  changePasswordForm = new FormGroup({
    emp_email: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required])
  });
  get f() { return this.changePasswordForm.controls; }
  constructor(private changeForgotPasswardService: ChangeForgotPasswardService,
    private router : Router) { }

  ngOnInit(): void {
  }


  changeForgotPassword(){
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if(!this.changePasswordForm.valid){
      return 
    }
    let params = this.changePasswordForm.value;
     let email = params.emp_email;
     let pass = params.pass;
     const formData = new FormData();
    formData.append('emp_email', email );
    formData.append('pass',pass);

    this.changeForgotPasswardService.changeForgotPassword(formData).subscribe((response)=>{
      if(response.status == "200"){
        this.msg = response.msg;
        setTimeout(()=>{
          this.router.navigate(['/shailerscrm/login'])
        }, 2000)
      }else{
        this.error = response.msg;
      }
    })
  }
}
