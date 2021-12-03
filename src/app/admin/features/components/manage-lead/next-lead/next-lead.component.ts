import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataSendService } from '../../../services/form-data-service/data-send.service';
import { AddNewLeadService } from '../../../services/new-lead-add/add-new-lead.service';

@Component({
  selector: 'app-next-lead',
  templateUrl: './next-lead.component.html',
  styleUrls: ['./next-lead.component.css']
})
export class NextLeadComponent implements OnInit {
  dateRangeValue: any = Date;
  nextDate = new Date();
  submitted = false;
  isFooterDisabled = true;
  public error: any;
  public msg: any;

  nextLeadForm = new FormGroup({
    cus_name : new FormControl(),
    mobile : new FormControl(),
    category : new FormControl(),
    lead_feedback : new FormControl('', [Validators.required]),
    remind_date : new FormControl('', [Validators.required]),
    comment : new FormControl('', [Validators.required]),
    lead_by : new FormControl('', [Validators.required]),
   
  })
  id: any;
  get f(){return this.nextLeadForm.controls}
  constructor(private dataSendService : DataSendService,
              private addNewLeadService : AddNewLeadService) {
    this.nextDate.setDate(this.nextDate.getDate() + 7);
    this.dateRangeValue = [new Date(), this.nextDate];
  }

  ngOnInit(): void {
    this.getAllLeadData()
  }

  getAllLeadData(){
    this.dataSendService.nextLeadObject.subscribe((data)=>{
    this.nextLeadForm.patchValue({
      cus_name : data.cus_name,
      mobile : data.mobile,
      category : data.category_name,
      lead_feedback : data.lead_feedback,
      id : data.id
    })
   this.id  = data.id;
    })
   
    
  }

  updateLead(){    
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if(this.nextLeadForm.invalid){
      return
    }
    let params = this.nextLeadForm.value;
    let remindDate = params.remind_date
    let comment = params.comment
    let leadBy = params.lead_by
    const formData = new FormData();
    formData.append('lead_feedback' , params.lead_feedback);
    formData.append('remind_date' , remindDate);
    formData.append('comment' , comment);
    formData.append('lead_by' , leadBy);
    formData.append('id' , this.id);
    formData.append('status' , "2");
   this.addNewLeadService.addNewLead(formData).subscribe((response)=>{
     if(response.msg == "You have successfully Add Lead."){
       this.msg = response.msg       
     } else {
       this.error = response.msg;
     }     
   });
  }
}
