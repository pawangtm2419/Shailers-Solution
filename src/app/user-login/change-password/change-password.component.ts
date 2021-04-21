import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePasswordService } from '../service/change-password/change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  submitted = false;
  isFooterDisabled = true;
 public error : any;
 public msg : any;
  changePasswordForm = new FormGroup({
    emp_email: new FormControl('', [Validators.required]),
    new_password : new FormControl('', [Validators.required]),
    confirm_password : new FormControl('', [Validators.required])
}); 
get f() { return this.changePasswordForm.controls; }
  constructor(private changePasswordService:ChangePasswordService,
    private router : Router) { }

  ngOnInit(): void {
  }

  changePassword(){
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if(!this.changePasswordForm.valid){
      return 
    }
    let params = this.changePasswordForm.value;
     let email = params.emp_email;
     let newPassword = params.new_password;
     let confirmPassword = params.confirm_password;
     const formData = new FormData();
    formData.append('emp_email', email );
    formData.append('new_password', newPassword );
    formData.append('confirm_password',confirmPassword);
    this.changePasswordService.changePassword(formData).subscribe((response)=>{
    
      if(response.status == "200" &&  newPassword == confirmPassword){
        setTimeout(()=>{
          this.router.navigate(['/shailerscrm/login'])
        }, 2000);
        this.msg = response.msg;
      }else{
        this.error = response.msg;
      }
    })
  }

}
