import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimeSheetService } from '../../services/time-sheet/time-sheet.service';

@Component({
  selector: 'app-view-timesheet',
  templateUrl: './view-timesheet.component.html',
  styleUrls: ['./view-timesheet.component.css']
})
export class ViewTimesheetComponent implements OnInit {
  timeSheetDetails: any;

  constructor(private activatedRoute : ActivatedRoute,
            private timeSheetService : TimeSheetService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
       this.viewDetails(params['date']);
  });
  }
  
 viewDetails(date : any){
   
   this.timeSheetService.timeSheetData.subscribe((response)=>{
     this.timeSheetDetails = response
     console.log( this.timeSheetDetails);
     
   })
 }

}
