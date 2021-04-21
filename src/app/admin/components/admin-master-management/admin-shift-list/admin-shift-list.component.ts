import { Component, OnInit } from '@angular/core';
import { ShiftTypeListService } from 'src/app/admin/services/master-management/shift-type-list/shift-type-list.service';

@Component({
  selector: 'app-admin-shift-list',
  templateUrl: './admin-shift-list.component.html',
  styleUrls: ['./admin-shift-list.component.css']
})
export class AdminShiftListComponent implements OnInit {
  shiftListDataLength: any;
  shiftListData: any;
  filterTerm: any;
  p: number = 1;
  formName = "shiftList"
  shiftData: any;
  constructor(private shiftTypeListService : ShiftTypeListService) { }

  ngOnInit(): void {
    this.getShiftList();
  }

  getView(formType : any ,data: any){
   this.formName = formType 
   const formData = new FormData();
   formData.append("id", data);
   this.shiftTypeListService.shiftDetails(formData).subscribe((response)=>{
     this.shiftData = response;
   })
  }
  getShiftList(){
    this.shiftTypeListService.adminShifList().subscribe((response)=>{
      this.shiftListData = response;
      this.shiftListDataLength = this.shiftListData.length
    })
  }

}
