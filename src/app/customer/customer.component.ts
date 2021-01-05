import { Component, OnInit } from '@angular/core';
import { CUSTOMER_TABLE_CONFIG, TABLE_DATA } from './customer.constant';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  tableConfig = CUSTOMER_TABLE_CONFIG;
  tableData = TABLE_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
