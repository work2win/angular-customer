import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent implements OnInit{

  id!: number;
  customer: Customer = new Customer();

  constructor(private customerService: CustomerService,
     private route: ActivatedRoute,
     private router: Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.customerService.getCustomerbyId(this.id).subscribe(data => {
      this.customer = data;
      //this.goToCustomerList();
    });
   
    
  }
  goToCustomerList(){
    this.router.navigate(['/customers']);
  }

  updateCustomer(){
    this.customerService.updateEmployee(this.id,this.customer).subscribe(data => {
      this.customer = new Customer();
      this.goToCustomerList();
    });
  }

  
  onSubmit() {
   this.updateCustomer();
   //this.customerService.updateEmployee(this.id,this.customer).subscribe(data => {

  }
}
function goToCustomerList() {
  throw new Error('Function not implemented.');
}

