import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageNotifyService } from 'src/app/shared/services/image-notify.service';
import { EmployeeDetailsService } from '../service/employee-details/employee-details.service';
import { UpdateProfileService } from '../service/update-profile/update-profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})

export class UpdateProfileComponent implements OnInit {
  submitted = false;
  isFooterDisabled = true;
  public error: any;
  public msg: any;
  userImage : any;
  updateForm = new FormGroup({
    alt_mobile: new FormControl('', [Validators.required]),
    other_email: new FormControl('', [Validators.required]),
    blood_group: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });
  name: any;
  designation: any;
  mobileNumber: any;
  email: any;
  dob: any;
  dateOfJoining: any;
  base64textString = [];
  alterNateMobile: any;
  alterNateOtherEmail: any;
  bloodGroup: any;

  constructor(private updateProfileService: UpdateProfileService,
              private imageNotifyService:ImageNotifyService,
              private sanitizer: DomSanitizer,
              private employeeDetailsService: EmployeeDetailsService) { }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  updateProfileData() {
    this.msg = null;
    this.error = null;
    this.submitted = true;
    let userId: any = window.localStorage.getItem("emp_id")
    let params = this.updateForm.value;
     let alternateMobile = params.alt_mobile;
     let otherEmail = params.other_email;
     let bloodGroup = params.blood_group;
     
    const formData = new FormData();
    formData.append('emp_id', userId);
    formData.append('alt_mobile', alternateMobile);
    formData.append('other_email', otherEmail);
    formData.append('blood_group', bloodGroup);
    formData.append('image', this.userImage);
    this.updateProfileService.update_profile(formData).subscribe((response) => {
          this.imageNotifyService.imageNotyFire.next('refresh');
          this.msg = response.msg;
    },
    (error:any) => {
      this.error = error.error
      console.log(this.error);
      
   }); 
   
  }

  getEmployeeDetails(){
    let userId : any = window.localStorage.getItem("emp_id");
    
    const formData = new FormData();
    formData.append('emp_id', userId);
    this.employeeDetailsService.emp_details(formData).subscribe((data)=>{
     this.name = data[0].emp_name;
     this.designation = data[0].emp_desg;
     this.mobileNumber = data[0].emp_mobile;
     this.email = data[0].emp_email;
     this.dob = data[0].dob;
     this.dateOfJoining = data[0].doj;
     this.alterNateMobile = data[0].alt_mobile;
     this.alterNateOtherEmail = data[0].other_email;
     this.bloodGroup = data[0].blood_group
   })
  }

  UploadImages(event:any) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.userImage = reader?.result?.toString();
    };
  }
 
}
