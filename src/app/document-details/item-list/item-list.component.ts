
import { Component, OnInit, Input } from '@angular/core';
import { DocumentItem } from 'src/app/model/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() items: DocumentItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
