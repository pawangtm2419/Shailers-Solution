import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user-login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidenavbarComponent } from './shared/components/sidenavbar/sidenavbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProjectStatsComponent } from './dashboard/components/project-stats/project-stats.component';
import { AddTimesheetComponent } from './dashboard/components/add-timesheet/add-timesheet.component';
import { AttendenceComponent } from './dashboard/components/attendence/attendence.component';
import { TimesheetComponent } from './dashboard/components/timesheet/timesheet.component';
import { ProjectListComponent } from './dashboard/components/project-list/project-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewTimesheetComponent } from './dashboard/components/view-timesheet/view-timesheet.component';
import { TakeLeaveComponent } from './dashboard/components/leave-management/take-leave/take-leave.component';
import { LeaveHistoryComponent } from './dashboard/components/leave-management/leave-history/leave-history.component';
import { UpdateProfileComponent } from './user-login/update-profile/update-profile.component';
import { AddIntimeAttendenceComponent } from './dashboard/components/add-intime-attendence/add-intime-attendence.component';
import { WebcamModule } from 'ngx-webcam';
import { AddOutTimeAttendenceComponent } from './dashboard/components/add-out-time-attendence/add-out-time-attendence.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationComponent } from './dashboard/components/confirmation/confirmation.component';
import { OtpVerifyComponent } from './user-login/otp-verify/otp-verify.component';
import { ChangePasswordComponent } from './user-login/change-password/change-password.component';
import { ChangeForgotPasswordComponent } from './user-login/change-forgot-password/change-forgot-password.component';
import { AdminSideNavbarComponent } from './admin/shared/components/admin-side-navbar/admin-side-navbar.component';
import { AdminFooterComponent } from './admin/shared/components/admin-footer/admin-footer.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AdminModule } from './admin/admin.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavbarComponent,
    FooterComponent,
    ProjectStatsComponent,
    AddTimesheetComponent,
    AttendenceComponent,
    TimesheetComponent,
    ProjectListComponent,
    ViewTimesheetComponent,
    TakeLeaveComponent,
    LeaveHistoryComponent,
    UpdateProfileComponent,
    AddIntimeAttendenceComponent,
    AddOutTimeAttendenceComponent,
    ConfirmationComponent,
    OtpVerifyComponent,
    ChangePasswordComponent,
    ChangeForgotPasswordComponent,
    AdminSideNavbarComponent,
    AdminFooterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    WebcamModule,
    AdminModule,
    NgbModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
