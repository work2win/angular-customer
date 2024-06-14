import { AccountTransfer } from './AccountTransfer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { MoneyTransfer } from './MoneyTransfer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

 // private baseURL = "http://localhost:9091/customers";

 
 constructor(private httpClient: HttpClient) { }
  
  getCustomerList(): Observable<Customer[]>{
    
    //console.log("t"+this.httpClient.get<Customer[]>('http://localhost:9091/customers'));
    return this.httpClient.get<Customer[]>('http://localhost:9091/customers');
    //return this.httpClient.get<Customer[]>('baseURL');
  }

  createCustomer(customer: Customer): Observable<Object>{
    console.log("customer service"+customer)
    return this.httpClient.post('http://localhost:9091/customers', customer);
  }

  accounttransaction(accountTransfer: AccountTransfer): Observable<Object>{
    console.log("account transfer"+accountTransfer.balance+accountTransfer.fromAccount+accountTransfer.toAccount);
    return this.httpClient.post('http://localhost:8080/sendMoney', accountTransfer);
  }

  moneyTransfer(moneyTransfer: MoneyTransfer): Observable<MoneyTransfer[]>{
    console.log("moneyTransfer trans type"+moneyTransfer.typetrans);
    return this.httpClient.post<MoneyTransfer[]>("http://localhost:9091/transfer",moneyTransfer);
  }

  getCustomerbyId(id: number): Observable<Customer>{
    
    const url = "http://localhost:9091/customers/"+id;
    console.log("id->"+this.httpClient.get<Customer>(url));
    return this.httpClient.get<Customer>(url);
  }

  updateEmployee(id: number, customer: Customer):Observable<Object>{
    const url = "http://localhost:9091/customers/"+id;
    console.log("url in service"+url);
    return this.httpClient.put(url,customer);
  }

  deleteEmployee(id: number): Observable<Object>{
    const url = "http://localhost:9091/customer/"+id;
    console.log(" D url in service"+url);
    return this.httpClient.delete(url);
  }

  
}
