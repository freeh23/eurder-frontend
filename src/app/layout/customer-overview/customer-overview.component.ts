import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/Customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService) {
    this.customers = [];
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe(
      customers => this.customers = customers
    );
  }

}
