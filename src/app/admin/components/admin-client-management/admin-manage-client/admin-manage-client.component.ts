import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClientListService } from 'src/app/admin/services/admin-emp-management/admin-client-list/client-list.service';

@Component({
  selector: 'app-admin-manage-client',
  templateUrl: './admin-manage-client.component.html',
  styleUrls: ['./admin-manage-client.component.css']
})
export class AdminManageClientComponent implements OnInit {
  @ViewChild('modelForm') modelForm !: ElementRef;
  @ViewChild('deactivate') deactivate !: ElementRef;
  clientData: any;
  clientDataLength: any;
  formType = "clientListPage";
  filterTerm : any;
  requestProcessing = true;
  p= 1
  clientsDetails: any;
  private rowData : any = null;
  selectedButton : any = {}
  clientId: any;
  constructor(private clientListService : ClientListService) { }

  ngOnInit(): void {
    this.getAllClientDetails()
  }

  getId(data : any){
    let id = data.target.value;
  ;
    
  }

  getAllClientDetails(){
    this.requestProcessing = true;
    this.clientListService.clientsList().subscribe((response)=>{
      this.requestProcessing = false;
      this.clientData = response;
      this.clientDataLength = this.clientData.length;
    })
  }

  toggeleForm(formName : any, data : any){
    this.formType = formName
   const formData = new FormData();
    formData.append('id' ,data )
    this.clientListService.clientsDetails(formData).subscribe((response)=>{
      this.clientsDetails = response
    })
  }

  getData(data : any){
    this.clientId = data;
    }

  getProjectId(){
    this.selectedButton[this.clientId]= !this.selectedButton[this.clientId];
    if(this.clientId != null){
     
      this.modelForm.nativeElement.click();
    }
   }
 
  
  
}
