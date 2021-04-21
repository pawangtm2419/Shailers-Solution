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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationComponent } from './dashboard/components/confirmation/confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OtpVerifyComponent } from './user-login/otp-verify/otp-verify.component';
import { ChangePasswordComponent } from './user-login/change-password/change-password.component';
import { ChangeForgotPasswordComponent } from './user-login/change-forgot-password/change-forgot-password.component';
import { AdminSideNavbarComponent } from './admin/shared/components/admin-side-navbar/admin-side-navbar.component';
import { AdminFooterComponent } from './admin/shared/components/admin-footer/admin-footer.component';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { AdminAttendenceListComponent } from './admin/components/emp-management/admin-attendence-list/admin-attendence-list.component';
import { AdminTimesheetRecordComponent } from './admin/components/emp-management/admin-timesheet-record/admin-timesheet-record.component';
import { AdminEmployeeTimesheetComponent } from './admin/components/emp-management/admin-employee-timesheet/admin-employee-timesheet.component';
import { AdminManageEmployeeComponent } from './admin/components/emp-management/admin-manage-employee/admin-manage-employee.component';
import { AdminGiveAccessComponent } from './admin/components/emp-management/admin-give-access/admin-give-access.component';
import { AdminLeaveRequestComponent } from './admin/components/admin-leave-management/admin-leave-request/admin-leave-request.component';
import { AdminMangeProjectComponent } from './admin/components/admin-project-manage/admin-mange-project/admin-mange-project.component';
import { AdminAssignProjectComponent } from './admin/components/admin-project-manage/admin-assign-project/admin-assign-project.component';
import { AdminManageActivityComponent } from './admin/components/admin-activity-management/admin-manage-activity/admin-manage-activity.component';
import { AdminAssignActivityComponent } from './admin/components/admin-activity-management/admin-assign-activity/admin-assign-activity.component';
import { AdminNewInvoiceComponent } from './admin/components/admin-invoice-management/admin-new-invoice/admin-new-invoice.component';
import { AdminOldInvoiceComponent } from './admin/components/admin-invoice-management/admin-old-invoice/admin-old-invoice.component';
import { AdminManageExpenseComponent } from './admin/components/admin-expense-management/admin-manage-expense/admin-manage-expense.component';
import { AdminExpenseEntryComponent } from './admin/components/admin-expense-management/admin-expense-entry/admin-expense-entry.component';
import { AdminManageClientComponent } from './admin/components/admin-client-management/admin-manage-client/admin-manage-client.component';
import { AdminLeadCategoryComponent } from './admin/components/admin-lead-management/admin-lead-category/admin-lead-category.component';
import { AdminManageLeadComponent } from './admin/components/admin-lead-management/admin-manage-lead/admin-manage-lead.component';
import { AdminDomainDataComponent } from './admin/components/admin-domain-management/admin-domain-data/admin-domain-data.component';
import { AdminShiftTypeListComponent } from './admin/components/admin-master-management/admin-shift-type-list/admin-shift-type-list.component';
import { AdminShiftListComponent } from './admin/components/admin-master-management/admin-shift-list/admin-shift-list.component';
import { AdminOfficeListComponent } from './admin/components/admin-master-management/admin-office-list/admin-office-list.component';
import { AdminDepartmentListComponent } from './admin/components/admin-master-management/admin-department-list/admin-department-list.component';
import { AdminUpdateComponent } from './admin/shared/components/admin-update/admin-update.component';
import { AdminAddEmpComponent } from './admin/components/admin-add-emp/admin-add-emp/admin-add-emp.component';
import { AddNewProjectsComponent } from './admin/features/components/add-new-projects/add-new-projects/add-new-projects.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AssignProjectByAdminComponent } from './admin/features/components/assign-project/assign-project-by-admin/assign-project-by-admin.component';
import { ManageLeadeComponent } from './admin/features/components/manage-lead/manage-leade/manage-leade.component';
import { NextLeadComponent } from './admin/features/components/manage-lead/next-lead/next-lead.component';
import { AddShiftTypeComponent } from './admin/features/components/add-shift-type/add-shift-type/add-shift-type.component';
import { AddShiftComponent } from './admin/features/components/add-shift/add-shift/add-shift.component';
import { AddNewOfficeComponent } from './admin/features/components/add-new-office/add-new-office/add-new-office.component';
import { InvoiceDetailsComponent } from './admin/components/invoice-details/invoice-details/invoice-details.component';
import { AddNewDepartmentComponent } from './admin/features/components/add-new-department/add-new-department/add-new-department.component';
import { AddNewClientComponent } from './admin/features/components/add-new-client/add-new-client/add-new-client.component';





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
    AdminFooterComponent,
    AdminDashboardComponent,
    AdminAttendenceListComponent,
    AdminTimesheetRecordComponent,
    AdminEmployeeTimesheetComponent,
    AdminManageEmployeeComponent,
    AdminGiveAccessComponent,
    AdminLeaveRequestComponent,
    AdminMangeProjectComponent,
    AdminAssignProjectComponent,
    AdminManageActivityComponent,
    AdminAssignActivityComponent,
    AdminNewInvoiceComponent,
    AdminOldInvoiceComponent,
    AdminManageExpenseComponent,
    AdminExpenseEntryComponent,
    AdminManageClientComponent,
    AdminLeadCategoryComponent,
    AdminManageLeadComponent,
    AdminDomainDataComponent,
    AdminShiftTypeListComponent,
    AdminShiftListComponent,
    AdminOfficeListComponent,
    AdminDepartmentListComponent,
    AdminUpdateComponent,
    AdminAddEmpComponent,
    AddNewProjectsComponent,
    AssignProjectByAdminComponent,
    ManageLeadeComponent,
    NextLeadComponent,
    AddShiftTypeComponent,
    AddShiftComponent,
    AddNewOfficeComponent,
    InvoiceDetailsComponent,
    AddNewDepartmentComponent,
    AddNewClientComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    WebcamModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    BsDatepickerModule.forRoot() 
  ],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
