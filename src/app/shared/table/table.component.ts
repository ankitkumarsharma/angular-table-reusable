import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() tableConfig:any;
  @Input() data:any [] = [];
  @Output() action = new EventEmitter();
  text: string = 'text';
  button: string = 'button';
  number: string = 'number';
  constructor() { }

  ngOnInit(): void {
  }
  onClick(event:any, item:any){
    let obj = {
      id: event.target.id,
      item: item
    }
    this.action.emit(obj);
  }
}
