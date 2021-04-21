import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManageActivityService } from 'src/app/admin/services/admin-activity-management/manage-activity/manage-activity.service';
import { AdminProjectListService } from 'src/app/admin/services/admin-emp-management/admin-project-list/admin-project-list.service';

@Component({
  selector: 'app-admin-assign-activity',
  templateUrl: './admin-assign-activity.component.html',
  styleUrls: ['./admin-assign-activity.component.css']
})
export class AdminAssignActivityComponent implements OnInit {
  adminProjectListData: any;
  activityListData: any;
  filterTerm: any;
  p: number = 1;
  submitted = false;
  isFooterDisabled = true;
  public error: any;
  public msg: any;
  formType = "assignButton";
  data: any;

  activityAssignForm = new FormGroup({
    pro_id: new FormControl('', [Validators.required]),
    activity_name: new FormControl('', [Validators.required])
  });
  activityList: any;
  activityListLength: any;

  get f() { return this.activityAssignForm.controls; }
  constructor(private adminProjectListService: AdminProjectListService,
    private manageActivityService: ManageActivityService) { }

  ngOnInit(): void {
    this.getProjectData();
    this.getActivityData();
    this.getAssignActivityData();
  }

  getProjectData() {
    this.adminProjectListService.adminProjectList().subscribe((response) => {
      this.adminProjectListData = response;
    })
  }

  getActivityData() {
    this.manageActivityService.activityData().subscribe((response) => {
      this.activityListData = response;
    })
  }

  getAssignActivityData() {
    this.manageActivityService.activityAssignData().subscribe((response) => {
      this.activityList = response;
      this.activityListLength = this.activityList.length;
    })
  }

  getIdAssignData(formName: any, assignData: any) {
    this.activityAssignForm.patchValue({
      pro_id: assignData.pro_id,
      activity_name: assignData.activity_name,
      activity_id: assignData.activity_id,
    });
    this.formType = formName;
    this.data = assignData;
  }

  updateAssignActivity(){
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if(!this.activityAssignForm.valid){
      return 
    }
    let params = this.activityAssignForm.value;
    const formData = new FormData();
    formData.append('pro_id' ,  this.data.pro_id);
    formData.append('activity_name' , params.activity_name);
    formData.append('activity_id' , this.data.activity_id );
    this.manageActivityService.assignActivityUpdate(formData).subscribe((response)=>{
      if (response.status == "200") {
        console.log(response);
        
        this.activityList.push(params);
        this.getAssignActivityData();
      }
      })
      this.submitted = false;
      this.activityAssignForm.reset();
  }

  assignActivity() {
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if (!this.activityAssignForm.valid) {
      return
    }
    let params = this.activityAssignForm.value;
    let projectId = params.pro_id;
    let activityName = params.activity_name;
    const formData = new FormData();
    formData.append('pro_id', projectId);
    formData.append('activity_name', activityName);
    this.manageActivityService.assignActivity(formData).subscribe((response) => {
      if (response.status == "200") {
        this.activityList.push(params);
        this.getAssignActivityData();
      }

    })
    this.submitted = false;
    this.activityAssignForm.reset();
  }

}
