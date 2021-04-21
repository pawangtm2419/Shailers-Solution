import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAssignActivityComponent } from './admin/components/admin-activity-management/admin-assign-activity/admin-assign-activity.component';
import { AdminManageActivityComponent } from './admin/components/admin-activity-management/admin-manage-activity/admin-manage-activity.component';
import { AdminAddEmpComponent } from './admin/components/admin-add-emp/admin-add-emp/admin-add-emp.component';
import { AdminManageClientComponent } from './admin/components/admin-client-management/admin-manage-client/admin-manage-client.component';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { AdminDomainDataComponent } from './admin/components/admin-domain-management/admin-domain-data/admin-domain-data.component';
import { AdminExpenseEntryComponent } from './admin/components/admin-expense-management/admin-expense-entry/admin-expense-entry.component';
import { AdminManageExpenseComponent } from './admin/components/admin-expense-management/admin-manage-expense/admin-manage-expense.component';
import { AdminNewInvoiceComponent } from './admin/components/admin-invoice-management/admin-new-invoice/admin-new-invoice.component';
import { AdminOldInvoiceComponent } from './admin/components/admin-invoice-management/admin-old-invoice/admin-old-invoice.component';
import { AdminLeadCategoryComponent } from './admin/components/admin-lead-management/admin-lead-category/admin-lead-category.component';
import { AdminManageLeadComponent } from './admin/components/admin-lead-management/admin-manage-lead/admin-manage-lead.component';
import { AdminLeaveRequestComponent } from './admin/components/admin-leave-management/admin-leave-request/admin-leave-request.component';
import { AdminDepartmentListComponent } from './admin/components/admin-master-management/admin-department-list/admin-department-list.component';
import { AdminOfficeListComponent } from './admin/components/admin-master-management/admin-office-list/admin-office-list.component';
import { AdminShiftListComponent } from './admin/components/admin-master-management/admin-shift-list/admin-shift-list.component';
import { AdminShiftTypeListComponent } from './admin/components/admin-master-management/admin-shift-type-list/admin-shift-type-list.component';
import { AdminAssignProjectComponent } from './admin/components/admin-project-manage/admin-assign-project/admin-assign-project.component';
import { AdminMangeProjectComponent } from './admin/components/admin-project-manage/admin-mange-project/admin-mange-project.component';
import { AdminAttendenceListComponent } from './admin/components/emp-management/admin-attendence-list/admin-attendence-list.component';
import { AdminEmployeeTimesheetComponent } from './admin/components/emp-management/admin-employee-timesheet/admin-employee-timesheet.component';
import { AdminGiveAccessComponent } from './admin/components/emp-management/admin-give-access/admin-give-access.component';
import { AdminManageEmployeeComponent } from './admin/components/emp-management/admin-manage-employee/admin-manage-employee.component';
import { AdminTimesheetRecordComponent } from './admin/components/emp-management/admin-timesheet-record/admin-timesheet-record.component';
import { InvoiceDetailsComponent } from './admin/components/invoice-details/invoice-details/invoice-details.component';
import { AddNewClientComponent } from './admin/features/components/add-new-client/add-new-client/add-new-client.component';
import { AddNewDepartmentComponent } from './admin/features/components/add-new-department/add-new-department/add-new-department.component';
import { AddNewOfficeComponent } from './admin/features/components/add-new-office/add-new-office/add-new-office.component';
import { AddNewProjectsComponent } from './admin/features/components/add-new-projects/add-new-projects/add-new-projects.component';
import { AddShiftTypeComponent } from './admin/features/components/add-shift-type/add-shift-type/add-shift-type.component';
import { AddShiftComponent } from './admin/features/components/add-shift/add-shift/add-shift.component';
import { AssignProjectByAdminComponent } from './admin/features/components/assign-project/assign-project-by-admin/assign-project-by-admin.component';
import { ManageLeadeComponent } from './admin/features/components/manage-lead/manage-leade/manage-leade.component';
import { NextLeadComponent } from './admin/features/components/manage-lead/next-lead/next-lead.component';
import { AdminSideNavbarComponent } from './admin/shared/components/admin-side-navbar/admin-side-navbar.component';
import { AdminUpdateComponent } from './admin/shared/components/admin-update/admin-update.component';
import { AddIntimeAttendenceComponent } from './dashboard/components/add-intime-attendence/add-intime-attendence.component';
import { AddOutTimeAttendenceComponent } from './dashboard/components/add-out-time-attendence/add-out-time-attendence.component';
import { AddTimesheetComponent } from './dashboard/components/add-timesheet/add-timesheet.component';
import { AttendenceComponent } from './dashboard/components/attendence/attendence.component';
import { LeaveHistoryComponent } from './dashboard/components/leave-management/leave-history/leave-history.component';
import { TakeLeaveComponent } from './dashboard/components/leave-management/take-leave/take-leave.component';
import { ProjectListComponent } from './dashboard/components/project-list/project-list.component';
import { ProjectStatsComponent } from './dashboard/components/project-stats/project-stats.component';
import { TimesheetComponent } from './dashboard/components/timesheet/timesheet.component';
import { ViewTimesheetComponent } from './dashboard/components/view-timesheet/view-timesheet.component';
import { SidenavbarComponent } from './shared/components/sidenavbar/sidenavbar.component';
import { UserLoginGuard } from './shared/guards/user-login-gaurd/user-login.guard';
import { ChangeForgotPasswordComponent } from './user-login/change-forgot-password/change-forgot-password.component';
import { ChangePasswordComponent } from './user-login/change-password/change-password.component';
import { LoginComponent } from './user-login/login/login.component';
import { OtpVerifyComponent } from './user-login/otp-verify/otp-verify.component';
import { UpdateProfileComponent } from './user-login/update-profile/update-profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'shailerscrm/login', pathMatch: 'full' },
  { path: 'shailerscrm/login', component:LoginComponent},
  { path: 'shailerscrm/otp-verify', component:OtpVerifyComponent},
  { path: 'shailerscrm/change-password', component:ChangePasswordComponent},
  { path: 'shailerscrm/change-forgot-password', component:ChangeForgotPasswordComponent},

  { path: 'shailerscrm/index', component:SidenavbarComponent,  canActivate: [UserLoginGuard],
         children:[{ path: 'emp-dashboard', component:ProjectStatsComponent},
                   { path: 'addtimesheet', component:AddTimesheetComponent},
                   { path: 'emp-attendence', component:AttendenceComponent},
                   { path: 'emp-timesheet', component:TimesheetComponent},
                   { path: 'emp-projectlist', component:ProjectListComponent},
                   { path: 'emp-view-timesheet', component:ViewTimesheetComponent},
                   { path: 'emp-take-leave', component:TakeLeaveComponent},
                   { path: 'emp-leave-history', component:LeaveHistoryComponent},
                   { path: 'emp-update-profile', component:UpdateProfileComponent},
                   { path: 'add-intime-attendence', component:AddIntimeAttendenceComponent},
                   { path: 'add-out-time-attendence', component:AddOutTimeAttendenceComponent},
                  
                  ]
},

{path : 'shailerscrm/admin' , component:AdminSideNavbarComponent,
       children:[{path:'dashboard' , component:AdminDashboardComponent},
                 {path:'attendence/list' , component:AdminAttendenceListComponent},
                 {path:'timesheet/records' , component:AdminTimesheetRecordComponent},
                 {path:'timesheet' , component:AdminEmployeeTimesheetComponent},
                 {path:'employee/records' , component:AdminManageEmployeeComponent},
                 {path:'employee/access' , component:AdminGiveAccessComponent},
                 {path:'leave/reruest' , component:AdminLeaveRequestComponent},
                 {path:'manage/project' ,component:AdminMangeProjectComponent},
                 {path:'assign/project' ,component:AdminAssignProjectComponent},
                 {path:'manage/activity', component:AdminManageActivityComponent},
                 {path:'assign/activity', component:AdminAssignActivityComponent},
                 {path:'new/invoice', component:AdminNewInvoiceComponent},
                 {path:'old/invoice', component:AdminOldInvoiceComponent},
                 {path:'manage/expense', component:AdminManageExpenseComponent},
                 {path:'entry/expense', component:AdminExpenseEntryComponent},
                 {path:'manage/client', component:AdminManageClientComponent},
                 {path:'lead/category', component:AdminLeadCategoryComponent},
                 {path:'manage/lead', component:AdminManageLeadComponent},
                 {path:'domain/data', component:AdminDomainDataComponent},
                 {path:'shift/type/list', component:AdminShiftTypeListComponent},
                 {path:'shift/list', component:AdminShiftListComponent},
                 {path:'office/list', component:AdminOfficeListComponent},
                 {path:'department/list', component:AdminDepartmentListComponent},
                 {path:'update/profile', component:AdminUpdateComponent},
                 {path:'add/emp', component:AdminAddEmpComponent},
                 {path:'add/new-project', component:AddNewProjectsComponent},
                 {path:'assign/new-project', component:AssignProjectByAdminComponent},
                 {path:'manage/add-new/lead', component:ManageLeadeComponent},
                 {path:'manage/next-lead', component:NextLeadComponent},
                 {path:'add-shift/type', component:AddShiftTypeComponent},
                 {path:'add-shift/data', component:AddShiftComponent},
                 {path:'add-new-office', component:AddNewOfficeComponent},
                 {path:'invoice-details', component:InvoiceDetailsComponent},
                 {path:'add-new/department', component:AddNewDepartmentComponent},
                 {path:'add-new/client', component:AddNewClientComponent},
                 ]
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
