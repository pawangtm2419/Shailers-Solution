import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminManageEmpService } from 'src/app/admin/services/admin-emp-management/admin-manage-emp/admin-manage-emp.service';
import { AdminProjectListService } from 'src/app/admin/services/admin-emp-management/admin-project-list/admin-project-list.service';
import { AddProjectByAdminService } from '../../../services/addProject/add-project-by-admin.service';
import { AssignProjectService } from '../../../services/assing-project/assign-project.service';
import { DataSendService } from '../../../services/form-data-service/data-send.service';

@Component({
  selector: 'app-assign-project-by-admin',
  templateUrl: './assign-project-by-admin.component.html',
  styleUrls: ['./assign-project-by-admin.component.css']
})
export class AssignProjectByAdminComponent implements OnInit {
  projectListData: any;
  employeeListData: any;
  dateRangeValue : any = Date;
  nextDate = new Date();
  acctivityData: any;
  str_date : any;
  end_date : any;
  submitted = false;
  isFooterDisabled = true;
 public error : any;
 public msg : any;

  assignProjectForm = new FormGroup({
    pro_id: new FormControl('', [Validators.required]),
    activity : new FormControl('', [Validators.required]),
    emp_id : new FormControl('', [Validators.required]),
    str_date : new FormControl('', [Validators.required]),
    end_date : new FormControl('', [Validators.required]),
    msg : new FormControl('', [Validators.required]),
});
  details: any;
  activityName: any;
  empId: any;
get f() { return this.assignProjectForm.controls; }
  constructor(private adminProjectListService : AdminProjectListService,
              private adminManageEmpService : AdminManageEmpService,
              private assignProjectService : AssignProjectService,
              private route : Router,
              private dataSendService : DataSendService,
              private addProjectByAdminService : AddProjectByAdminService) { 
                this.nextDate.setDate(this.nextDate.getDate() + 7);
                this.dateRangeValue= [new Date(), this.nextDate];
              }

  ngOnInit(): void {
    this.getProjectList();
    this.getEmpList();
    this.subscribeData();
  }

  getProjectList(){
    this.adminProjectListService.adminProjectList().subscribe((response)=>{
      this.projectListData = response
    })
  }
  getEmpList(){
    this.adminManageEmpService.adminEmpList().subscribe((response)=>{
      this.employeeListData = response;
      this.empId = this.employeeListData.emp_id
    })
  }

  gstprojectListData(data : any){
    this.details = data.target.value;
    const formData = new FormData();
    formData.append('pro_id' , this.details)
   this.addProjectByAdminService.adminProjectActivity(formData).subscribe((response)=>{
    this.acctivityData = response;
    this.activityName = this.acctivityData.activity;
  })
}

subscribeData(){
  this.dataSendService.formObject.subscribe((data)=>{
    this.assignProjectForm.patchValue({
      id : data.id,
      activity : data.activity,
      emp_id : data.emp_id,
      emp_name : data.emp_name,
      str_date :data.str_date,
      end_date : data.end_date,
      msg : data.msg,
      pro_id : data.pro_id,
    });
  
   console.log(data.msg);
   console.log(data.activity);
   console.log(data.emp_name);
   
  })
}

assignProject(){
  this.msg = null;
  this.error = null;
  this.submitted = true;
  if(!this.assignProjectForm.valid){
    return 
  }
  let params = this.assignProjectForm.value;
  let msg = params.msg
  const formData = new FormData();
 formData.append('pro_id', params.pro_id );
 formData.append('activity', params.activity);
 formData.append('emp_id', this.empId);
 formData.append('str_date', params.str_date);
 formData.append('end_date', params.end_date);
 formData.append('msg', msg );
 this.assignProjectService.assignProject(formData).subscribe((response)=>{
  if(response.status == "200"){
   setTimeout(()=>{
        this.route.navigate(['/shailerscrm/admin/assign/project']);
    }, 1000)
    this.msg = response.msg; 
  }
}, 
   (error : any)=>{
    this.error = error.msg;
   })
}

}
