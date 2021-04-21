import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddNewOfficeService } from '../../../services/add-new-office/add-new-office.service';

@Component({
  selector: 'app-add-new-office',
  templateUrl: './add-new-office.component.html',
  styleUrls: ['./add-new-office.component.css']
})
export class AddNewOfficeComponent implements OnInit {
   msg : any;
   error : any;
   submitted = false;
  addOfficeForm = new FormGroup({
    office_name : new FormControl('' , [Validators.required]),
    office_address : new FormControl('' , [Validators.required]),
  });
  get f(){return this.addOfficeForm.controls}
  constructor(private addNewOfficeService : AddNewOfficeService,
              private route : Router) { }

  ngOnInit(): void {
  }
  
  addNewOffice(){
   this.msg = null;
   this.error = null;
   this.submitted = true;
   if(this.addOfficeForm.invalid){
     return
   }
   let params = this.addOfficeForm.value;
   let name = params.office_name;
   let address = params.office_address;
   const formData = new FormData()
   formData.append('office_name' , name)
   formData.append('office_address' , address)
   this.addNewOfficeService.addOfficeData(formData).subscribe((response)=>{
    console.log(response);
    
    if(response.status == "200"){
       this.msg = response.msg
       setTimeout(()=>{
        this.route.navigateByUrl('/shailerscrm/admin/office/list')
       }, 2000)
     }else{
       this.error = response.msg;
     }
   })
  }
}
