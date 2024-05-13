import { CustomerService } from './../customer.service';
import { AccountTransfer } from './../AccountTransfer';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrl: './account-transaction.component.css'
})
export class AccountTransactionComponent implements OnInit{

  fromAccount!: number;
  toAccount!: number;
  balance!: number;
  accountTransfer: AccountTransfer = new AccountTransfer();

  constructor(private customerService: CustomerService, 
    private route: ActivatedRoute,
    private router: Router) {}


  ngOnInit(): void{

    this.fromAccount = this.route.snapshot.params['fromAccount'];
    this.toAccount = this.route.snapshot.params['toAccount'];
    this.balance = this.route.snapshot.params['balance'];
  }

  goToCustomerList(){
    this.router.navigate(['/customers']);
  }

  sendMoney(){

    console.log("sendMoney"+this.accountTransfer.balance);
    this.customerService.accounttransaction(this.accountTransfer).subscribe({
      next: value => console.log("money transfer "+this.accountTransfer.balance),
      error: err => console.log(err),
      complete: () => console.log("complete")
    });
    this.goToCustomerList();
  }
  onSubmit(){
    console.log("onSubmit");
    this.sendMoney();
  }

}
