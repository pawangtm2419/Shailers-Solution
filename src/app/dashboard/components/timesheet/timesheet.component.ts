import { Component, OnInit } from '@angular/core';
import { TimeSheetService } from '../../services/time-sheet/time-sheet.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  totalTimeSheetData: any;
  totalTimeSheetDataLength: any;
  filterTerm: any;
  dateTime: any;
  hoursTime : any;
  requestProcessing = true;
  p: number = 1;
  numberData: any;
  allHoursData: any;
  constructor(private timeSheetService : TimeSheetService) { }

  ngOnInit(): void {
    this.getTotalTimeSheetList();
  }


  getTotalTimeSheetList(){
    let userId : any = window.localStorage.getItem("emp_id")
    const formData = new FormData();
    formData.append('emp_id', userId);
    this.requestProcessing = true;
    this.timeSheetService.totalTimeSheetList(formData).subscribe((data)=>{
      this.requestProcessing = false
   this.totalTimeSheetData = data;
   this.totalTimeSheetDataLength = data.length;
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

  getData(empDetails : any){
   this.timeSheetService.timeSheetData.next(empDetails);
  }
 
}
