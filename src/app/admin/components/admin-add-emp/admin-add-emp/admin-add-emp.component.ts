import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-add-emp',
  templateUrl: './admin-add-emp.component.html',
  styleUrls: ['./admin-add-emp.component.css']
})
export class AdminAddEmpComponent implements OnInit {
  submitted = false;
  isFooterDisabled = true;
 public error : any;
 public msg : any;

  addEmpForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    office_id : new FormControl('', [Validators.required]),
    department_id: new FormControl('', [Validators.required]),
    shift_id: new FormControl('', [Validators.required]),
    desg: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    gen: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    doj: new FormControl('', [Validators.required]),
    sal: new FormControl('', [Validators.required]),
    acc_no: new FormControl('', [Validators.required]),
    bank_name: new FormControl('', [Validators.required]),
    ifsc: new FormControl('', [Validators.required]),
    mon_target: new FormControl('', [Validators.required]),
    insentive: new FormControl('', [Validators.required]),
    bonus: new FormControl('', [Validators.required]),
    module: new FormControl('', [Validators.required]),
}); 

get f() { return this.addEmpForm.controls; }
  constructor() { }

  ngOnInit(): void {
  }

  addEmpSubmit(){
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if(!this.addEmpForm.valid){
      return 
    }
    let params = this.addEmpForm.value;
    console.log("All data here=====>",params);
    let name = params.name;
    let officeId = params.office_id;
    let departmentId = params.department_id;
    let shiftId = params.shift_id;
    let desg = params.desg;
    let mobile = params.mobile;
    let email = params.email;
    let gen = params.gen;
    let dob = params.dob;
    let doj = params.doj;
    let sal = params.sal;
    let accNo = params.acc_no;
    let bankName = params.bank_name;
    let ifsc = params.ifsc;
    let monTarget = params.mon_target;
    let insentive = params.insentive;
    let bonus = params.bonus;
    let module = params.module;
    const formData = new FormData();
    formData.append('name', name );
    formData.append('office_id', officeId );
    formData.append('department_id', departmentId );
    formData.append('shift_id', shiftId );
    formData.append('desg', desg );
    formData.append('mobile', mobile );
    formData.append('email', email );
    formData.append('gen', gen );
    formData.append('dob', dob );
    formData.append('doj', doj );
    formData.append('sal', sal );
    formData.append('acc_no', accNo );
    formData.append('bank_name', bankName );
    formData.append('ifsc', ifsc );
    formData.append('mon_target', monTarget );
    formData.append('insentive', insentive );
    formData.append('bonus', bonus );
    formData.append('module', module );   
  }
}
