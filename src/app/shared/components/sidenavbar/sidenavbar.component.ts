import { Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { EmployeeDetailsService } from 'src/app/user-login/service/employee-details/employee-details.service';
import { ImageNotifyService } from '../../services/image-notify.service';
import { ProjectcountdetailsService } from '../../services/projectcountdetails.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  @ViewChild('sideNavBar') sideNavBar!: ElementRef;
  dateToday: number = Date.now();
  formName = "attendenceNotMarked";
  totalProject : any;
  totalOngoingProject: any;
  totalDealyProject: any;
  totalCompleteProject: any;
  profileImagePath : any;
  user :any;
  name: any;
  constructor(private imageNotifyService:ImageNotifyService,
              private employeeDetailsService: EmployeeDetailsService) { 
    setInterval(() => {this.dateToday = Date.now()}, 1);
  }

  ngOnInit(): void {
  this.imageNotyfy();
  this.getEmployeeDetails();
  }
  openSideNav() {
    let tagName = this.sideNavBar.nativeElement.classList;
    if (tagName.contains('close')) {
      tagName.remove('close')
    } else {
      tagName.add('close')
    }
  }

  imageNotyfy(){
    this.imageNotifyService.imageNotyFire.subscribe((data)=>{  
      if(data != '') {
          this.getEmployeeDetails()
      }
    })
   }
  getEmployeeDetails(){
    let userId : any = window.localStorage.getItem("emp_id")
    const formData = new FormData();
    formData.append('emp_id', userId);
    this.employeeDetailsService.emp_details(formData).subscribe((data)=>{
      this.user = data[0]
     })
  }

  logOut() {
    if (window.localStorage) {
      window.localStorage.removeItem('user_type');
      window.localStorage.clear();
       }
  }
}