import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  tableConfig: any = {}
  tableData: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
