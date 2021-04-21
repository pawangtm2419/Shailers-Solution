import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManageExpenseService } from 'src/app/admin/services/expence-management-system/manage-expense/manage-expense.service';

@Component({
  selector: 'app-admin-manage-expense',
  templateUrl: './admin-manage-expense.component.html',
  styleUrls: ['./admin-manage-expense.component.css']
})
export class AdminManageExpenseComponent implements OnInit {
  expenceListData: any;
  expenceListDataLenghth: any;
  filterTerm: any;
  p: number = 1;
  submitted = false;
  isFooterDisabled = true;
  requestProcessing = true
 public error : any;
 public msg : any;
 formName = "expenseData";
   
  addExpenseForm = new FormGroup({
    exp_type: new FormControl('', [Validators.required]),
    exp_name : new FormControl('', [Validators.required]),
    exp_mobile : new FormControl('', [Validators.required]),
    exp_alt_mobile : new FormControl('', [Validators.required]),
}); 
  data: any;

get f(){return this.addExpenseForm.controls}
  constructor(private manageExpenseService :ManageExpenseService) { }

  ngOnInit(): void {
    this.getAllExpenseList();
  }

  getAllExpenseList(){
    this.requestProcessing = true
    return this.manageExpenseService.allExpenseData().subscribe((response)=>{
      this.expenceListData = response;
      this.requestProcessing = false
      this.expenceListDataLenghth =  this.expenceListData.length
    })
  }
 
  editExpense(formType : any,expId : any){
   this.addExpenseForm.patchValue({
      exp_type : expId.exp_type,
      exp_name : expId.exp_name,
      exp_mobile : expId.exp_mobile,
      exp_alt_mobile :expId.exp_alt_mobile,
      exp_id : expId.exp_id
    });
    this.formName = formType; 
   this.data = expId;
  }


  updateExpense(){
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if(!this.addExpenseForm.valid){
      return 
    }
    let params = this.addExpenseForm.value;
    const formData = new FormData();
    formData.append('exp_type' ,  params.exp_type);
    formData.append('exp_name' , params.exp_name);
    formData.append('exp_mobile' ,  params.exp_mobile);
    formData.append('exp_alt_mobile' , params.exp_alt_mobile);
    formData.append('exp_id' , this.data.exp_id);
     this.manageExpenseService.updateExpense(formData).subscribe((response)=>{
        this.msg = response.msg;
        this.expenceListData.push(this.data);
         this.getAllExpenseList();
     })
     this.submitted = false;
     this.addExpenseForm.reset();
  }

  addExpense(){
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if(!this.addExpenseForm.valid){
      return 
    }
    let param = this.addExpenseForm.value;
    let expType = param.exp_type;
    let expName = param.exp_name;
    let expMobile = param.exp_mobile;
    let expAltMobile = param.exp_alt_mobile;
    const formData = new FormData();
    formData.append('exp_type', expType)
    formData.append('exp_name', expName)
    formData.append('exp_mobile', expMobile)
    formData.append('exp_alt_mobile', expAltMobile)
    this.manageExpenseService.addExpense(formData).subscribe((response)=>{
      if(response.status == "200"){
        this.msg = response.msg;
        this.expenceListData.push(param);
        this.getAllExpenseList();
     
      }else{
        this.error = response.msg;
      }
    })
    this.submitted = false;
    this.addExpenseForm.reset();
  }

}
