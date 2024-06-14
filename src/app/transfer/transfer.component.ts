import { MoneyTransfer } from './../MoneyTransfer';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css'
})
export class TransferComponent implements OnInit{

  moneyTransfer: MoneyTransfer = new MoneyTransfer();
  constructor(private customerService: CustomerService, private router: Router){}
  ngOnInit(){
    
  }

  onSubmit(){
    this.customerService.moneyTransfer(this.moneyTransfer).subscribe({
      next: data => console.log("data from trans meth"),
      error: err => console.log(err),
      complete: () => console.log("complete")
    });

    this.router.navigate(['/customers']);
  }

}
