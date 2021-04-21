import { Component, OnInit } from '@angular/core';
import { ShiftTypeListService } from 'src/app/admin/services/master-management/shift-type-list/shift-type-list.service';

@Component({
  selector: 'app-admin-shift-type-list',
  templateUrl: './admin-shift-type-list.component.html',
  styleUrls: ['./admin-shift-type-list.component.css']
})
export class AdminShiftTypeListComponent implements OnInit {
  shiftTypeList: any;
  shiftTypeListLength: any;
  filterTerm: any;
  p: number = 1;
  formType ="shiftTypeList";
  constructor(private shiftTypeListService : ShiftTypeListService) { }

  ngOnInit(): void {
    this.getAllShiftTypeList();
  }
  
 toggleForm(formName : any){
   this.formType = formName
 }

  getAllShiftTypeList(){
    this.shiftTypeListService.adminShifTypetList().subscribe((response)=>{
      this.shiftTypeList = response;
      this.shiftTypeListLength = this.shiftTypeList.length
    })
  }

}
