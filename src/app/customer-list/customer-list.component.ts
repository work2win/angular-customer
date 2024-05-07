import { Customer } from './../customer';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{

  customers!: Customer[];

  constructor(private customerService : CustomerService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers(){
    //console.log("inside list"+this.customerService.getCustomerList().subscribe());
    
     this.customerService.getCustomerList().subscribe(data => {
       this.customers = data;
       console.log("inside listtt"+data);
     });
  }

  updateCustomer(id: number){
    
    console.log("update"+id);
    //this.router.navigate(['/update-customer', id],{ relativeTo: this.route });
    this.router.navigate(['update-customer',id]);
  }
  onSave(){
    console.log("hello");
  }

  deleteCustomer(id: number){
    console.log("id to be deleted"+id);
    this.customerService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.getCustomers();
    })
  }
}
