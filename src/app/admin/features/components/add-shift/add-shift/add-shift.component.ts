import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShiftTypeListService } from 'src/app/admin/services/master-management/shift-type-list/shift-type-list.service';
import { AddShiftService } from '../../../services/add-new-shift/add-shift.service';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.css']
})
export class AddShiftComponent implements OnInit {
  submitted = false;
  isFooterDisabled = true;
 public error : any;
 public msg : any;
 idData : any;

  shiftTypeList: any;
   addShiftForm = new FormGroup({
    shift_type_id : new FormControl('', [Validators.required]),
    name : new FormControl('', [Validators.required]),
    intime : new FormControl('', [Validators.required]),
    outtime : new FormControl('', [Validators.required]),
    intime_relaxation : new FormControl('', [Validators.required]),
    outtime_relaxation : new FormControl('', [Validators.required]),
   });

   get f(){return this.addShiftForm.controls}
  constructor(private shiftTypeListService : ShiftTypeListService,
              private addShiftService : AddShiftService,
              private route : Router) { }

  ngOnInit(): void {
    this.getAllShiftTypeList();
  }

  getAllShiftTypeList(){
    this.shiftTypeListService.adminShifTypetList().subscribe((response)=>{
      this.shiftTypeList = response;
    })
  }

  getId(data : any){
    this.idData = data.target.value
  }

  addShiftData(){
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if(this.addShiftForm.invalid){
      return
    }
    let params = this.addShiftForm.value;
    let shiftName = params.name;
    let inTime = params.intime;
    let outTime = params.outtime;
    let intimeRelaxation = params.intime_relaxation;
    let outtimeRelaxation = params.outtime_relaxation
    const formData = new FormData();
    formData.append('shift_type_id' , this.idData)
    formData.append('name' , shiftName)
    formData.append('intime' , inTime)
    formData.append('outtime' , outTime)
    formData.append('intime_relaxation' , intimeRelaxation)
    formData.append('outtime_relaxation' , outtimeRelaxation)
    this.addShiftService.addShiftData(formData).subscribe((response)=>{
     if(response.status == "200"){
        this.msg = response.msg;
        this.route.navigateByUrl('/shailerscrm/admin/shift/list')
     }else{
       this.error = response.msg;
     }
      
    });
    this.submitted = false;
    this.addShiftForm.reset();
    
  }

}
