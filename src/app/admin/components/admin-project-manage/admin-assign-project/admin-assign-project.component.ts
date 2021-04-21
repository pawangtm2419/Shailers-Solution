import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSendService } from 'src/app/admin/features/services/form-data-service/data-send.service';
import { AdminAssignProjectListService } from 'src/app/admin/services/admin-emp-management/admin-assign-project/admin-assign-project-list.service';

@Component({
  selector: 'app-admin-assign-project',
  templateUrl: './admin-assign-project.component.html',
  styleUrls: ['./admin-assign-project.component.css']
})
export class AdminAssignProjectComponent implements OnInit {
  assignProjectData: any;
  filterTerm: any;
  requestProcessing = true;
  p: number = 1;
  assignProjectDataLength: any;
  formType = "assignedProjectList";
 
  projectViewData: any;
  constructor(private adminAssignProjectListService : AdminAssignProjectListService,
               private route: Router ,
              private dataSendService :DataSendService) { }

  ngOnInit(): void {
    this.getAssignProjectData()
  }

  getAssignProjectData(){
    this.requestProcessing = true;
    this.adminAssignProjectListService.adminAssignProject().subscribe((response)=>{
      this.requestProcessing = false;
      this.assignProjectData = response;
      this.assignProjectDataLength =  this.assignProjectData.length;
    })
  }

  getEditData(data : any){
  this.dataSendService.formObject.next(data);
  this.route.navigateByUrl('/shailerscrm/admin/assign/new-project')
  }

}
