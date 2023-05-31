import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { BankEmployeeComponent } from './bank-employee/bank-employee.component';

const routes: Routes = [
  {path:'',redirectTo:'employee', pathMatch:'full'},
  {path:'create',component:CreateEmployeeComponent},
  {path: 'employee' ,component:EmployeeListComponent},
  {path:'update/:id',component:UpdateEmployeeComponent},
  {path :'viewDetails/:id',component:EmployeeDetailsComponent},
  {path:'bank/:id',component:BankEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
