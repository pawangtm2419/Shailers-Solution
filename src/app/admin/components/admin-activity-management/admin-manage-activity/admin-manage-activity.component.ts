import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManageActivityService } from 'src/app/admin/services/admin-activity-management/manage-activity/manage-activity.service';

@Component({
  selector: 'app-admin-manage-activity',
  templateUrl: './admin-manage-activity.component.html',
  styleUrls: ['./admin-manage-activity.component.css']
})
export class AdminManageActivityComponent implements OnInit {
  @ViewChild('modelForm') modelForm !: ElementRef;
  submitted = false;
  isFooterDisabled = true;
 public error : any;
 public msg : any;
  isMasterSel : any;
 activityListData: any;
 activityData = [] as  any;
 checkedCategoryList = [] as any
 activityForm = new FormGroup({
  activity_name: new FormControl('', [Validators.required]),
});
  totalId: any;
  idTest: any;
  selectedAll: any;
  
get f() { return this.activityForm.controls; }
  constructor(private manageActivityService : ManageActivityService) { }

  ngOnInit(): void {
    this.activityList();
  }
  
  activityList(){
    this.manageActivityService.activityData().subscribe((response)=>{
      this.activityListData = response;
    })
  }

  addActivityData(){
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if(!this.activityForm.valid){
      return 
    }
    let params = this.activityForm.value;
    let activityName = params.activity_name;
    const formData = new FormData();
    formData.append('activity_name',activityName);
     this.manageActivityService.addActivity(formData).subscribe((response)=>{
      if(response.status == "200"){
        this.activityListData.push(params);
        this.activityList();
        //  this.activityForm.reset();
        this.msg = response.msg;
      }else{
        this.error = response.msg;
      }
     })
     this.submitted = false;
     this.activityForm.reset()
    
  }

  
  deleteData(activityId : any){
    this.idTest = activityId
    this.totalId = this.activityData.push(activityId);
    
  }

  deleteActivityData(){
    this.activityData.forEach((element: any) => {
      const formData = new FormData();
      formData.append('act_id' ,  element);
      this.manageActivityService.deletActivity(formData).subscribe((response)=>{
        if(response.status == "200"){
          this.msg = response.msg;
          this.activityList();
          this.modelForm.nativeElement.click();
        }
      })  
    });
  this.getCheckedItemList();
  }

  checkUncheckAll() {
    for (var i = 0; i < this.activityListData.length; i++) {
      this.activityListData[i].isSelected = this.isMasterSel;
    }
    this.getCheckedItemList();
  }
   
  isAllSelected() {
    this.isMasterSel = this.activityListData.every(function(item:any) {
        return item.act_id == true;
      })
    this.getCheckedItemList();
  }
  
  getCheckedItemList(){
    this.checkedCategoryList = [];
    for (var i = 0; i < this.activityListData.length; i++) {
      if(this.activityListData[i].act_id)
      this.checkedCategoryList.push(this.activityListData[i]);
    }
    this.checkedCategoryList = JSON.stringify(this.checkedCategoryList);
  }
  
}
