import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShiftTypeListService } from 'src/app/admin/services/master-management/shift-type-list/shift-type-list.service';

@Component({
  selector: 'app-add-shift-type',
  templateUrl: './add-shift-type.component.html',
  styleUrls: ['./add-shift-type.component.css']
})
export class AddShiftTypeComponent implements OnInit {
  submitted = false;
  isFooterDisabled = true;
 public error : any;
 public msg : any;

  addShiftTypeForm = new FormGroup({
    name: new FormControl('', [Validators.required])
}); 
get f() { return this.addShiftTypeForm.controls; }
  constructor(private shiftTypeListService : ShiftTypeListService,
             private route : Router) { }

  ngOnInit(): void {
  }

  addShiftType(){
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if(!this.addShiftTypeForm.valid){
      return 
    }
     let params = this.addShiftTypeForm.value;
      let name = params.name;
       const formData = new FormData();
    formData.append('name', name );
    this.shiftTypeListService.addShiftType(formData).subscribe((response)=>{
      if(response.status == "200"){
      this.msg = response.msg;
      this.route.navigateByUrl('/shailerscrm/admin/shift/type/list')
      }else{
        this.error = response.msg
      }
    })
  }

}
