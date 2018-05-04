import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css']
})
export class InvoiceTableComponent implements OnInit {

  @Input() invoiceList : any[];
  @Output() onDelete = new EventEmitter();
  @Output() onDuplicate = new EventEmitter();

  ngOnInit() { }

}
