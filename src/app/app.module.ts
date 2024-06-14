import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';
import { TransferComponent } from './transfer/transfer.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    AccountTransactionComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
