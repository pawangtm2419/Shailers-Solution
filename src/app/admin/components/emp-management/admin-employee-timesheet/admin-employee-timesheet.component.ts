import { Component, OnInit } from '@angular/core';
import { AdminEmpTimeSheetListService } from 'src/app/admin/services/admin-emp-management/admin-emp-timesheet/admin-emp-time-sheet-list.service';

@Component({
  selector: 'app-admin-employee-timesheet',
  templateUrl: './admin-employee-timesheet.component.html',
  styleUrls: ['./admin-employee-timesheet.component.css']
})
export class AdminEmployeeTimesheetComponent implements OnInit {
  public formName = "empTimesheetList";
  adminEmpTimeSheetListData: any;
  filterTerm: any;
  p: number = 1;
  requestProcessing = true;
  empListDataLenght: any;
  adminTimeSheetViewData: any;
  adminTimeSheetViewDataLength: any;
  constructor(private adminEmpTimeSheetListService :AdminEmpTimeSheetListService) { }

  ngOnInit(): void {
    this.getAllEmpTimesheetList();
  }
  toggelForm(formType : any  , empId : any,  date : any){
    // if(empId == null || date == null){
    //   return
    // }
    console.log(date);
    console.log(empId);
    
    this.formName = formType;
    const formData = new FormData();
    formData.append('emp_id', empId );
    formData.append('datetime', date );
    this.adminEmpTimeSheetListService.adminTimeSheetView(formData).subscribe((response)=>{
      this.adminTimeSheetViewData = response;
       this.adminTimeSheetViewDataLength =  this.adminTimeSheetViewData.length
    })
  }


  getAllEmpTimesheetList(){
    this.requestProcessing = true;
    this.adminEmpTimeSheetListService.adminEmpTimesheetList().subscribe((response)=>{
      this.requestProcessing = false;
      this.adminEmpTimeSheetListData = response;
      this.empListDataLenght = this.adminEmpTimeSheetListData.length
    })
  }

  getFormattedTime(datetime:any) {
    let numberData = Number(datetime);
    var hours = (numberData / 3600);
     var rhours = Math.floor(hours);
     var minutes = (hours - rhours) * 60;
     var rminutes = Math.round(minutes);
     return  rhours+ ":" +rminutes;
  }

}
