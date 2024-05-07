import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css'
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {}

  saveCustomer(){
    this.customerService.createCustomer(this.customer).subscribe({
      next: value => console.log("create cust save"+this.customer),
      error: err => console.log(err),
      complete: () => console.log("complete")
    });
    
    this.goToCustomerList();
  }

  goToCustomerList(){
    this.router.navigate(['/customers']);
  }

  onSubmit() {
    console.log("on submit"+this.customer);
    this.saveCustomer();
  }

  

 

}
