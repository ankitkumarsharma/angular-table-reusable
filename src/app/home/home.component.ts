import { Component, OnInit } from '@angular/core';
import { HOME_TABLE_CONFIG, TABLE_DATA } from './home.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tableConfig = HOME_TABLE_CONFIG;
  tableData = TABLE_DATA;
  constructor() { }

  ngOnInit(): void {
  }
  action(event:any){
    if(event.id == 'edit'){
      alert('Edit Action');
    } else if(event.id == 'delete'){
      alert('Delete Action');
    }
  }
}
