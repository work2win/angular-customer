import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {path: 'customers', component: CustomerListComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path:'update-customer/:id', component: UpdateCustomerComponent},
  {path: 'account-transaction', component: AccountTransactionComponent},
  {path: 'transfer', component: TransferComponent},
  {path: '', redirectTo: 'customers', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
