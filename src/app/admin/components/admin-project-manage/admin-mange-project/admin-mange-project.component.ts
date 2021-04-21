import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AdminProjectListService } from 'src/app/admin/services/admin-emp-management/admin-project-list/admin-project-list.service';

@Component({
  selector: 'app-admin-mange-project',
  templateUrl: './admin-mange-project.component.html',
  styleUrls: ['./admin-mange-project.component.css']
})
export class AdminMangeProjectComponent implements OnInit {
  // @ViewChild('activateAndDeactivate') activateAndDeactivate !: ElementRef;
  projectListData: any;
  requestProcessing = true;
  filterTerm: any;
  p: number = 1;
  projectListDataLength: any;
  public formName = "projectList";
  projectViewData: any;
  toggle = true;
  activeButtonId = null;
  status = 'Active';
  selectedButton : any = {}
  constructor(private adminProjectListService : AdminProjectListService) { }

  ngOnInit(): void {
    this.getAdminProjectList();
  }

  
  toggelForm(formType : any, proId : any) {
    this.formName = formType;
    const formData = new FormData();
    formData.append('pro_id', proId );
    this.adminProjectListService.adminProjectView(formData).subscribe((response)=>{
      this.projectViewData = response;
    })
  }

  
  getAdminProjectList(){
    this.requestProcessing = true;
    this.adminProjectListService.adminProjectList().subscribe((response)=>{ 
      this.requestProcessing = false;
      this.projectListData = response;
      this.projectListDataLength = this.projectListData.length
    })
  }

  getProjectId(id : any){
   this.selectedButton[id]= !this.selectedButton[id];
   
  }


}
