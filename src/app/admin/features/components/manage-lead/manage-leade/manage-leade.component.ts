import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LeadCategoryService } from 'src/app/admin/services/lead-management/lead-category/lead-category.service';
import { ManageLeadService } from 'src/app/admin/services/lead-management/manage-lead/manage-lead.service';

@Component({
  selector: 'app-manage-leade',
  templateUrl: './manage-leade.component.html',
  styleUrls: ['./manage-leade.component.css']
})
export class ManageLeadeComponent implements OnInit {
  allLeadList: any;
  dateRangeValue : any = Date;
  nextDate = new Date();
  submitted = false;
  isFooterDisabled = true;
 public error : any;
 public msg : any;

  mangeLeadForm = new FormGroup({
    cus_name : new FormControl('', [Validators.required]),
    mobile : new FormControl('', [Validators.required]),
    category : new FormControl('', [Validators.required]),
    lead_feedback : new FormControl('', [Validators.required]),
    remind_date : new FormControl('', [Validators.required]),
    comment : new FormControl('', [Validators.required]),
  })

  get f(){return this.mangeLeadForm.controls}
  constructor(private leadCategoryService  : LeadCategoryService,
              private route : Router,
              private manageLeadService : ManageLeadService) { 
    this.nextDate.setDate(this.nextDate.getDate() + 7);
    this.dateRangeValue= [new Date(), this.nextDate];
  }

  ngOnInit(): void {
    this.getAllLeadCategory();
  }

  getAllLeadCategory() {
    this.leadCategoryService.leadList().subscribe((response) => {
      this.allLeadList = response;
    })
  }

  addLead(){
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if(!this.mangeLeadForm.valid){
      return 
    }
    let params = this.mangeLeadForm.value;
    let customerName = params.cus_name;
    let customerMobile = params.mobile;
    let comment = params.comment;
    const formData = new FormData();
    formData.append("cus_name",customerName)
    formData.append("mobile",customerMobile)
    formData.append("category",params.category)
    formData.append("lead_feedback",params.lead_feedback)
    formData.append("remind_date",params.remind_date)
    formData.append("comment",comment)
    this.manageLeadService.addManngeLead(formData).subscribe((response)=>{
      if(response.status == "200"){
       this.msg = response.msg;
        setTimeout(()=>{
          this.route.navigateByUrl('/shailerscrm/admin/manage/lead')
        }, 2000)
       
      }else{
        this.error = response.msg
      }
    })
    this.submitted = false;
    this.mangeLeadForm.reset();
  }
}
