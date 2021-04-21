import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LeadCategoryService } from 'src/app/admin/services/lead-management/lead-category/lead-category.service';

@Component({
  selector: 'app-admin-lead-category',
  templateUrl: './admin-lead-category.component.html',
  styleUrls: ['./admin-lead-category.component.css']
})
export class AdminLeadCategoryComponent implements OnInit {
  @ViewChild('deleteModel') deleteModel!: ElementRef
  allLeadList: any;

  submitted = false;
  isFooterDisabled = true;
  public error: any;
  public msg: any;
  leadCategoryData = [] as any;
  totalId: any;
  leadcategoryForm = new FormGroup({
    category_name: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required])
  });

  get f() { return this.leadcategoryForm.controls }
  constructor(private leadCategoryService: LeadCategoryService) { }

  ngOnInit(): void {
    this.getAllLeadCategory();
  }

  getAllLeadCategory() {
    this.leadCategoryService.leadList().subscribe((response) => {
      this.allLeadList = response;
    })
  }

  deleteData(categoryId: any) {
    this.totalId = this.leadCategoryData.push(categoryId);
  }

  deleteCategory() {
    this.leadCategoryData.forEach((element: any) => {
      const formData = new FormData();
      formData.append('id', element)
      this.leadCategoryService.deleteCategory(formData).subscribe((response) => {
        if (response.status == "200") {
          this.msg = response.msg;
          this.getAllLeadCategory();
          this.deleteModel.nativeElement.click();

        }
      })
    });
  }


  addCategory() {
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if (!this.leadcategoryForm.valid) {
      return
    }
    let params = this.leadcategoryForm.value;
    let categoryData = params.category_name;
    const formData = new FormData();
    formData.append('category_name', categoryData);
    formData.append('status', "1");
    this.leadCategoryService.addLeadCategory(formData).subscribe((response) => {
      if (response.status == "1") {
        console.log(response);

        this.msg = response.msg;
        this.allLeadList.push(params);
        this.getAllLeadCategory();
      }
    })
    this.submitted = false;
    this.leadcategoryForm.reset();
  }

}
