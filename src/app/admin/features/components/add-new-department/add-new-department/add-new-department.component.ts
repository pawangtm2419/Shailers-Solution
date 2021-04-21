import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentListService } from 'src/app/admin/services/master-management/department-list/department-list.service';
import { OfficeListService } from 'src/app/admin/services/master-management/office-list/office-list.service';

@Component({
  selector: 'app-add-new-department',
  templateUrl: './add-new-department.component.html',
  styleUrls: ['./add-new-department.component.css']
})
export class AddNewDepartmentComponent implements OnInit {
  msg : any;
  submitted : any;
  error : any;
  officeList: any;
  officeListLength: any;
   addNewDepartmentForm = new FormGroup({
    office_id : new FormControl('',[Validators.required]),
    department_name : new FormControl('',[Validators.required]),
    type_of_department : new FormControl('',[Validators.required]),
   });
   get f(){return this.addNewDepartmentForm.controls}
  constructor(private officeListService : OfficeListService,
              private departmentListService : DepartmentListService,
               private route : Router) { }

  ngOnInit(): void {
    this.grtOfficeList();
  }

  grtOfficeList(){
    this.officeListService.adminOfficeList().subscribe((response)=>{
      this.officeList = response;
      this.officeListLength = this.officeList.length
    })
  }

  addDepartment(){
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if(this.addNewDepartmentForm.invalid){
      return
    }
    let params = this.addNewDepartmentForm.value;
    let office_id = params.office_id
    let departmentName = params.department_name;
    let type_of_department = params.type_of_department;
    const formData = new FormData();
    formData.append('office_id', office_id);
    formData.append('department_name', departmentName);
    formData.append('type_of_department', type_of_department);
    this.departmentListService.addDepartMent(formData).subscribe((response)=>{
      if(response.status == "200"){
        this.msg = response.msg;
       setTimeout(()=>{
        this.route.navigateByUrl('/shailerscrm/admin/department/list');
       }, 2000)
      }else{
        this.error = response.msg;
      }
    })
    this.submitted = false
    this.addNewDepartmentForm.reset();
  }

}
