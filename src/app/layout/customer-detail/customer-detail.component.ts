import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/Customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {



  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {

  }


}
