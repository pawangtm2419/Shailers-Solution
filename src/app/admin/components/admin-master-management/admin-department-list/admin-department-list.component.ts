import { Component, OnInit } from '@angular/core';
import { DepartmentListService } from 'src/app/admin/services/master-management/department-list/department-list.service';

@Component({
  selector: 'app-admin-department-list',
  templateUrl: './admin-department-list.component.html',
  styleUrls: ['./admin-department-list.component.css']
})
export class AdminDepartmentListComponent implements OnInit {
  departmentList: any;
  departmentListLength: any;
  filterType : any;
  constructor(private departmentListService : DepartmentListService) { }

  ngOnInit(): void {
    this.getAllDepartmentList();
  }

  getAllDepartmentList(){
    this.departmentListService.departmentList().subscribe((response)=>{
      this.departmentList = response;
      this.departmentListLength = this.departmentList.length
    })
  }

}
