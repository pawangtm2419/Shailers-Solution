import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientListService } from 'src/app/admin/services/admin-emp-management/admin-client-list/client-list.service';
import { AddProjectByAdminService } from '../../../services/addProject/add-project-by-admin.service';

@Component({
  selector: 'app-add-new-projects',
  templateUrl: './add-new-projects.component.html',
  styleUrls: ['./add-new-projects.component.css']
})
export class AddNewProjectsComponent implements OnInit {
  @ViewChild('gstBox') gstBox!: ElementRef; 
  @ViewChild('advanceBox') advanceBox!: ElementRef;
  clientListData: any;
  public formName = "clientData";
  clientsDetailsData: any;
  dateRangeValue : any = Date;
  nextDate = new Date();
  inputMoneyData : any;
  tot_price : any;
  submitted = false;
  isFooterDisabled = true;
  public error : any;
  public msg : any;

  addProjectForm = new FormGroup({
    pro_type : new FormControl('', [Validators.required]),
    pro_name : new FormControl('', [Validators.required]),
    pro_desc : new FormControl('', [Validators.required]), 
    client_name : new FormControl('', [Validators.required]), 
    client_mobile : new FormControl('', [Validators.required]), 
    client_email : new FormControl('', [Validators.required]), 
    pro_strt_date : new FormControl('', [Validators.required]), 
    pro_end_date : new FormControl('', [Validators.required]), 
    pro_cost : new FormControl('', [Validators.required]), 
    gstt : new FormControl('', [Validators.required]), 
    gst : new FormControl('', [Validators.required]), 
    gst_cal : new FormControl('', [Validators.required]), 
    advance : new FormControl('', [Validators.required]), 
    advance_money : new FormControl('', [Validators.required]), 
    advance_type : new FormControl('', [Validators.required]), 
    advance_date : new FormControl('', [Validators.required]), 
    work_order_date : new FormControl('', [Validators.required]), 
}); 

get f() { return this.addProjectForm.controls; }
  constructor(private clientListService : ClientListService,
              private addProjectByAdminService : AddProjectByAdminService) { 
    this.nextDate.setDate(this.nextDate.getDate() + 7);
    this.dateRangeValue= [new Date(), this.nextDate];
  }
  
  ngOnInit(): void {
    this.getClientListData();
 
  }
  
 addProject(){
  this.msg = null;
  this.error = null;
  this.submitted = true;
  if(!this.addProjectForm.valid){
    return 
  }
  let params = this.addProjectForm.value;
  let projectType = params.pro_type;
  let projectName = params.pro_name;
  let projectDesp = params.pro_desc;
  let clientName = params.client_name;
  let clientEmail = params.client_email;
  let projectStartDate = params.pro_strt_date;
  let projectEndDate = params.pro_end_date;
  let projectCost = params.pro_cost;
  let projectGstt = params.gstt;
  let projectGst = params.gst;
  let projectGstCalculation = params.gst_cal;
  let projectAdvance = params.advance;
  let projectAdvanceMoney = params.advance_money;
  let projectAdvanceType = params.advance_type;
  let projectAdvanceDate = params.advance_date;
  let work_order_date = params.work_order_date;
  console.log(params);
  
  const formData = new FormData();
 formData.append('pro_type', projectType );
 formData.append('pro_name', projectName );
 formData.append('pro_desc', projectDesp );
 formData.append('client_name', clientName );
 formData.append('client_email', clientEmail );
 formData.append('pro_strt_date', projectStartDate );
 formData.append('pro_end_date', projectEndDate );
 formData.append('pro_cost', projectCost );
 formData.append('gstt', projectGstt );
 formData.append('gst', projectGst );
 formData.append('gst_cal', projectGstCalculation );
 formData.append('advance', projectAdvance );
 formData.append('advance_money', projectAdvanceMoney );
 formData.append('advance_type', projectAdvanceType );
 formData.append('advance_date', projectAdvanceDate );
 formData.append('work_order_date', work_order_date );
    this.addProjectByAdminService.addProjectData(formData).subscribe((response)=>{
      console.log(response);
      
    })
 }

  gstBoxDetails(data:any){
    let details = data.target.value;
   if(details == "0"){
     this.closeGstBox();
   }
   if(details == "1"){
     this.openGstBox();
   }
    
  }
  openGstBox() {
    let tagName = this.gstBox.nativeElement.classList;
    if (tagName.contains('gst-box-close')) {
      tagName.remove('gst-box-close')
    } else {
      tagName.add('gst-box-open')
    }
  }

  closeGstBox() {
    let tagName = this.gstBox.nativeElement.classList;
    if (tagName.contains('gst-box-open')) {
      tagName.remove('gst-box-open')
    } else {
      tagName.add('gst-box-close')
    }
  }
 
  changeClient(formType : any,data : any){
    if(data == null){
     return
    }
    this.formName = formType
  let clientId= data.target.value;
  const formData = new FormData();
  formData.append('unq_client_id', clientId );
  this.clientListService.clientDetails(formData).subscribe((response)=>{
    this.clientsDetailsData = response;
    
  })
  }

  getClientListData(){
    this.clientListService.clientList().subscribe((response)=>{
      this.clientListData = response;
    
    })
  }

  gstCalculation(){
    let data = this.inputMoneyData;
    var price = data * 1;
    this.tot_price = price + (price * 0.18);
   
  }

  advancePayment(data:any){
    let val =data.target.value;
    let tagName = this.advanceBox.nativeElement.classList;
    if (tagName.contains('gst-box-open')) {
      tagName.remove('gst-box-open')
    } else {
      tagName.add('gst-box-open')
    }
  }

}
