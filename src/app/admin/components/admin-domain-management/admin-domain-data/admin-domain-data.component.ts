import { Component, OnInit } from '@angular/core';
import { DomainManagementService } from 'src/app/admin/services/domain-management/domain-management.service';

@Component({
  selector: 'app-admin-domain-data',
  templateUrl: './admin-domain-data.component.html',
  styleUrls: ['./admin-domain-data.component.css']
})
export class AdminDomainDataComponent implements OnInit {
  domainData: any;
  domainDataLength: any;
 p : Number = 1;
 filterType : any;
 requestProcessing = true;
 formName = "domainList"
  domainDetailsData: any;
  id: any;
  constructor(private domainManagementService : DomainManagementService) { }

  ngOnInit(): void {
    this.getAllDomainData()
  }
  
   
  toggelForm(formType : any, data : any){
    this.formName = formType;
    if(data == null){
      return
    }
    const formData = new FormData();
    formData.append('num' , data);
    this.domainManagementService.domainDetails(formData).subscribe((response)=>{
     this.domainDetailsData = response;
    })
    
  }

  getAllDomainData(){
    this.requestProcessing = true;
    this.domainManagementService.adminDomainList().subscribe((response)=>{
      this.requestProcessing = false
      this.domainData = response;
      this.domainDataLength =  this.domainData.length
    })
  }

  getDetailsPage(){
    const formData = new FormData();
    formData.append('num' , this.id);
    this.domainManagementService.domainDetails(formData).subscribe((response)=>{
     this.domainDetailsData = response;
    })
  }

}
