import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AdminEmpViewService } from 'src/app/admin/services/admin-emp-management/admin-emp-view/admin-emp-view.service';
import { AdminManageEmpService } from 'src/app/admin/services/admin-emp-management/admin-manage-emp/admin-manage-emp.service';

@Component({
  selector: 'app-admin-manage-employee',
  templateUrl: './admin-manage-employee.component.html',
  styleUrls: ['./admin-manage-employee.component.css']
})
export class AdminManageEmployeeComponent implements OnInit {
  @ViewChild('statusId') statusId !: ElementRef;
  adminEmpList: any;
  adminEmpListLength: any;
  p: number = 1;
  filterTerm: any;
  // loader = true;
  requestProcessing = true;
  public formName = "empList";
  empViewDetailsData: any;
  statusData: any;
  constructor(private adminManageEmpService : AdminManageEmpService,
               private adminEmpViewService : AdminEmpViewService) { }

  ngOnInit(): void {
    this.adminEmpListData();
  }

  toggelForm(formType : any , empid : any) {
    this.formName = formType;
    if(empid == null){
      return
    }
    console.log(empid);
    
    const formData = new FormData();
    formData.append('emp_id', empid );
    
    this.adminEmpViewService.empViewDetails(formData).subscribe((response)=>{
      this.empViewDetailsData = response
      
    })
  }
  
  getId(data : any){
   this.statusData = data.target.value;
   let tagName = this.statusId.nativeElement.classList; 
   if (tagName.contains('close')) {
    tagName.remove('close')
  } else {
    tagName.add('close')
  }
    
  }
     

  adminEmpListData(){
    this.requestProcessing = true;
    this.adminManageEmpService.adminEmpList().subscribe((response : any)=>{
      this.requestProcessing = false;
      this.adminEmpList = response;
      this.adminEmpListLength =  this.adminEmpList.length;
    })
  }
  

}
