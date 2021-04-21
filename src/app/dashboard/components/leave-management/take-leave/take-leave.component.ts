import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TakeLeaveService } from '../service/take-leave.service';

@Component({
  selector: 'app-take-leave',
  templateUrl: './take-leave.component.html',
  styleUrls: ['./take-leave.component.css']
})
export class TakeLeaveComponent implements OnInit {

  submitted = false;
  public error : any;
 public msg : any;
  date = new Date();
  takeLeaveForm = new FormGroup({
    str_date: new FormControl('', [Validators.required]),
    end_date : new FormControl('', [Validators.required]),
    duration : new FormControl('', [Validators.required]),
    leave_type : new FormControl('', [Validators.required]),
    reason : new FormControl('', [Validators.required]),
    em_number : new FormControl('', [Validators.required, Validators.maxLength(10)]),
});   
get f() { return this.takeLeaveForm.controls; }
  constructor(private takeLeaveService : TakeLeaveService, private route : Router) { }

  ngOnInit(): void {
  
  }

  takeLeave(){
     this.msg = null;
    this.error = null;
    this.submitted = true;
    if(!this.takeLeaveForm.valid){
      return 
    }
   
    let params = this.takeLeaveForm.value;
     let startDate = params.str_date;
     let endDate = params.end_date;
     let duration = params.duration;
     let leaveType = params.leave_type;
     let reason = params.reason;
     let emNumber = params.em_number;
     let userId : any = window.localStorage.getItem("emp_id")
      var dd = String(this.date.getDate()).padStart(2, '0');
    var mm = String(this.date.getMonth() + 1).padStart(2, '0');
    var yyyy = this.date.getFullYear();
    let currentDate = dd + '-' + mm + '-' + yyyy;
     const formData = new FormData();

    formData.append('emp_id', userId);
    formData.append('str_date', startDate );
    formData.append('end_date',endDate);
    formData.append('duration',duration);
    formData.append('leave_type',leaveType);
    formData.append('reason',reason);
    formData.append('em_number',emNumber);
    formData.append('apply_date',currentDate);
    
    this.takeLeaveService.take_leave(formData).subscribe(
      (response:any) => {
         if(response.status == "200"){
          setTimeout(()=>{
            this.route.navigate(['/shailerscrm/index/emp-leave-history']);
          }, 1000)
          this.msg = response.msg;
          }else if(response.status == "201"){
          this.error = response.msg;
           }
        },
    (error:any) => {
       this.error = error.error
    });   
  }


}
