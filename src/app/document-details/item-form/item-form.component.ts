import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/model/article';
import { DocumentItem } from 'src/app/model/item.model';

import { DocumentsService } from 'src/app/services/documents.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  
  @Input() articles: Article[] = [];
  @Input()
  documentId: number = 0;

  
  newItem = new DocumentItem();

  @Output()
  itemAdded = new EventEmitter<DocumentItem>();


  constructor(private service: DocumentsService) { }

  ngOnInit(): void {
  }

  saveItem() {
    this.newItem.documents = this.documentId;
    this.itemAdded.emit(this.newItem);
    this.newItem = new DocumentItem();
  }

}
