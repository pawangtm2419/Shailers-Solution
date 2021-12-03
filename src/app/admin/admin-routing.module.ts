import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminAssignActivityComponent } from './components/admin-activity-management/admin-assign-activity/admin-assign-activity.component';
import { AdminManageActivityComponent } from './components/admin-activity-management/admin-manage-activity/admin-manage-activity.component';
import { AdminAddEmpComponent } from './components/admin-add-emp/admin-add-emp/admin-add-emp.component';
import { AdminManageClientComponent } from './components/admin-client-management/admin-manage-client/admin-manage-client.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminDomainDataComponent } from './components/admin-domain-management/admin-domain-data/admin-domain-data.component';
import { AdminExpenseEntryComponent } from './components/admin-expense-management/admin-expense-entry/admin-expense-entry.component';
import { AdminManageExpenseComponent } from './components/admin-expense-management/admin-manage-expense/admin-manage-expense.component';
import { AdminNewInvoiceComponent } from './components/admin-invoice-management/admin-new-invoice/admin-new-invoice.component';
import { AdminOldInvoiceComponent } from './components/admin-invoice-management/admin-old-invoice/admin-old-invoice.component';
import { AdminLeadCategoryComponent } from './components/admin-lead-management/admin-lead-category/admin-lead-category.component';
import { AdminManageLeadComponent } from './components/admin-lead-management/admin-manage-lead/admin-manage-lead.component';
import { AdminLeaveRequestComponent } from './components/admin-leave-management/admin-leave-request/admin-leave-request.component';
import { AdminDepartmentListComponent } from './components/admin-master-management/admin-department-list/admin-department-list.component';
import { AdminOfficeListComponent } from './components/admin-master-management/admin-office-list/admin-office-list.component';
import { AdminShiftListComponent } from './components/admin-master-management/admin-shift-list/admin-shift-list.component';
import { AdminShiftTypeListComponent } from './components/admin-master-management/admin-shift-type-list/admin-shift-type-list.component';
import { AdminAssignProjectComponent } from './components/admin-project-manage/admin-assign-project/admin-assign-project.component';
import { AdminMangeProjectComponent } from './components/admin-project-manage/admin-mange-project/admin-mange-project.component';
import { AdminAttendenceListComponent } from './components/emp-management/admin-attendence-list/admin-attendence-list.component';
import { AdminEmployeeTimesheetComponent } from './components/emp-management/admin-employee-timesheet/admin-employee-timesheet.component';
import { AdminGiveAccessComponent } from './components/emp-management/admin-give-access/admin-give-access.component';
import { AdminManageEmployeeComponent } from './components/emp-management/admin-manage-employee/admin-manage-employee.component';
import { AdminTimesheetRecordComponent } from './components/emp-management/admin-timesheet-record/admin-timesheet-record.component';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details/invoice-details.component';
import { AddNewClientComponent } from './features/components/add-new-client/add-new-client/add-new-client.component';
import { AddNewDepartmentComponent } from './features/components/add-new-department/add-new-department/add-new-department.component';
import { AddNewOfficeComponent } from './features/components/add-new-office/add-new-office/add-new-office.component';
import { AddNewProjectsComponent } from './features/components/add-new-projects/add-new-projects/add-new-projects.component';
import { AddShiftTypeComponent } from './features/components/add-shift-type/add-shift-type/add-shift-type.component';
import { AddShiftComponent } from './features/components/add-shift/add-shift/add-shift.component';
import { AssignProjectByAdminComponent } from './features/components/assign-project/assign-project-by-admin/assign-project-by-admin.component';
import { ManageLeadeComponent } from './features/components/manage-lead/manage-leade/manage-leade.component';
import { NextLeadComponent } from './features/components/manage-lead/next-lead/next-lead.component';
import { AdminUpdateComponent } from './shared/components/admin-update/admin-update.component';

const routes: Routes = [
  {path: 'dashboard' , component: AdminDashboardComponent},
  {path: 'attendence/list' , component: AdminAttendenceListComponent},
  {path: 'timesheet/records' , component: AdminTimesheetRecordComponent},
  {path: 'timesheet' , component: AdminEmployeeTimesheetComponent},
  {path: 'employee/records' , component: AdminManageEmployeeComponent},
  {path: 'employee/access' , component: AdminGiveAccessComponent},
  {path: 'leave/reruest' , component: AdminLeaveRequestComponent},
  {path: 'manage/project' , component: AdminMangeProjectComponent},
  {path: 'assign/project' , component: AdminAssignProjectComponent},
  {path: 'manage/activity', component: AdminManageActivityComponent},
  {path: 'assign/activity', component: AdminAssignActivityComponent},
  {path: 'new/invoice', component: AdminNewInvoiceComponent},
  {path: 'old/invoice', component: AdminOldInvoiceComponent},
  {path: 'manage/expense', component: AdminManageExpenseComponent},
  {path: 'entry/expense', component: AdminExpenseEntryComponent},
  {path: 'manage/client', component: AdminManageClientComponent},
  {path: 'lead/category', component: AdminLeadCategoryComponent},
  {path: 'manage/lead', component: AdminManageLeadComponent},
  {path: 'domain/data', component: AdminDomainDataComponent},
  {path: 'shift/type/list', component: AdminShiftTypeListComponent},
  {path: 'shift/list', component: AdminShiftListComponent},
  {path: 'office/list', component: AdminOfficeListComponent},
  {path: 'department/list', component: AdminDepartmentListComponent},
  {path: 'add/emp', component: AdminAddEmpComponent},
  {path: 'update/profile', component: AdminUpdateComponent},
  {path: 'add/new-project', component: AddNewProjectsComponent},
  {path: 'assign/new-project', component: AssignProjectByAdminComponent},
  {path: 'manage/add-new/lead', component: ManageLeadeComponent},
  {path: 'manage/next-lead', component: NextLeadComponent},
  {path: 'add-shift/type', component: AddShiftTypeComponent},
  {path: 'add-shift/data', component: AddShiftComponent},
  {path: 'add-new-office', component: AddNewOfficeComponent},
  {path: 'invoice-details', component: InvoiceDetailsComponent},
  {path: 'add-new/department', component: AddNewDepartmentComponent},
  {path: 'add-new/client', component: AddNewClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
