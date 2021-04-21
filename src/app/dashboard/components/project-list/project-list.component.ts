import { Component, OnInit } from '@angular/core';
import { ProjectListService } from '../../services/project-list/project-list.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  totalProjectData: any;
  filterTerm: any;
  totalProjectListLength: any;
  p: number = 1;
  requestProcessing = true
  constructor( private projectListService : ProjectListService) { }

  ngOnInit(): void {
    this.getTotalProjectList();
  }

  getTotalProjectList(){
    let userId : any = window.localStorage.getItem("emp_id")
    const formData = new FormData();
    formData.append('emp_id', userId);
    this.requestProcessing = true
    this.projectListService.totalProjectList(formData).subscribe((data)=>{
      this.totalProjectData = data;
      this.requestProcessing = false
   this.totalProjectListLength = data.length;
   
   })
  }

}
