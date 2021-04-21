import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExpenseEntryService } from 'src/app/admin/services/expence-management-system/expence-entry/expense-entry.service';

@Component({
  selector: 'app-admin-expense-entry',
  templateUrl: './admin-expense-entry.component.html',
  styleUrls: ['./admin-expense-entry.component.css']
})
export class AdminExpenseEntryComponent implements OnInit {
  expenseListData: any;
  submitted = false;
  isFooterDisabled = true;
  public error: any;
  public msg: any;
  filterTerm: any;
  p: number = 1;

  expenseEntryForm = new FormGroup({
    exp_type: new FormControl('', [Validators.required]),
    exp_date: new FormControl('', [Validators.required]),
    exp_paid: new FormControl('', [Validators.required]),
  });
  expenseList: any;
 get f(){return this.expenseEntryForm.controls}
  constructor(private expenseEntryService: ExpenseEntryService) { }

  ngOnInit(): void {
    this.getAllExpenseData();
    this.getExpenseData();
  }

  getAllExpenseData() {
    this.expenseEntryService.allExpenseName().subscribe((response) => {
      this.expenseListData = response;
    
    })
  }

  getExpenseData(){
    this.expenseEntryService.expenseList().subscribe((response)=>{
      this.expenseList = response;
    })
  }


  addExpense(){
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if(!this.expenseEntryForm.valid){
      return 
    }
    let params = this.expenseEntryForm.value;
    let expType = params.exp_type;
   let expDate = params.exp_date;
   let expPaid = params.exp_paid;
   const formData = new FormData();
  formData.append('exp_type', expType );
  formData.append('exp_date',expDate);
  formData.append('exp_paid',expPaid);
  this.expenseEntryService.addExpenseEntry(formData).subscribe((response)=>{
    if(response.status == "200"){
      console.log(response)
      this.msg = response.msg;
      this.expenseListData.push(params);
      this.getAllExpenseData();
    }else{
      this.error = response.msg;
    }
  })
  this.expenseEntryForm.reset();
  this.submitted = false;
  }

}
