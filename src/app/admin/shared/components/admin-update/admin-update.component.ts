import { Component, OnInit } from '@angular/core';
import { AdminProfileService } from '../../services/admin-profile/admin-profile.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {
  adminData: any;

  constructor(private adminProfileService : AdminProfileService) { }

  ngOnInit(): void {
    this.getAdminDetails();
  }

  getAdminDetails(){
    this.adminProfileService.adminDetails().subscribe((response)=>{
      this.adminData = response;
     
    })
  }

}
