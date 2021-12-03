import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { AdminLoginGuard } from './shared/guards/admin-login-guard/admin-login.guard';
import { UserLoginGuard } from './shared/guards/user-login-gaurd/user-login.guard';
import { ChangeForgotPasswordComponent } from './user-login/change-forgot-password/change-forgot-password.component';
import { ChangePasswordComponent } from './user-login/change-password/change-password.component';
import { LoginComponent } from './user-login/login/login.component';
import { OtpVerifyComponent } from './user-login/otp-verify/otp-verify.component';
import { UpdateProfileComponent } from './user-login/update-profile/update-profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent},
  { path: 'otp-verify', component:OtpVerifyComponent},
  { path: 'change-password', component:ChangePasswordComponent},
  { path: 'change-forgot-password', component:ChangeForgotPasswordComponent},
  { path: '', component:SidenavbarComponent,  canActivate: [UserLoginGuard], children: [
    { path: 'emp-dashboard', component:ProjectStatsComponent},
    { path: 'addtimesheet', component:AddTimesheetComponent},
    { path: 'emp-attendence', component:AttendenceComponent},
    { path: 'emp-timesheet', component:TimesheetComponent},
    { path: 'emp-projectlist', component:ProjectListComponent},
    { path: 'emp-view-timesheet', component:ViewTimesheetComponent},
    { path: 'emp-take-leave', component:TakeLeaveComponent},
    { path: 'emp-leave-history', component:LeaveHistoryComponent},
    { path: 'emp-update-profile', component:UpdateProfileComponent},
    { path: 'add-intime-attendence', component:AddIntimeAttendenceComponent},
    { path: 'add-out-time-attendence', component:AddOutTimeAttendenceComponent}
  ]},
  { path: 'admin', component:SidenavbarComponent,  canActivate: [AdminLoginGuard], children:[
    { path: '', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
