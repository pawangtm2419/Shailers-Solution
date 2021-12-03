import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

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
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminAssignActivityComponent,
    AdminManageActivityComponent,
    AdminAddEmpComponent,
    AdminManageClientComponent,
    AdminDashboardComponent,
    AdminExpenseEntryComponent,
    AdminDomainDataComponent,
    AdminManageExpenseComponent,
    AdminNewInvoiceComponent,
    AdminOldInvoiceComponent,
    AdminLeadCategoryComponent,
    AdminManageLeadComponent,
    AdminLeaveRequestComponent,
    AdminDepartmentListComponent,
    AdminOfficeListComponent,
    AdminShiftListComponent,
    AdminShiftTypeListComponent,
    AdminAssignProjectComponent,
    AdminMangeProjectComponent,
    AdminAttendenceListComponent,
    AdminEmployeeTimesheetComponent,
    AdminGiveAccessComponent,
    AdminManageEmployeeComponent,
    AdminTimesheetRecordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
