
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Document } from 'src/app/model/document.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() document: Document = new Document();
  @Output() record = new EventEmitter<Document>();

  constructor() { }

  ngOnInit() {
  }

  recordDocument() {
    this.document.status = "recorded";
    this.document.dateOfRecording = new Date().toISOString();
    this.record.emit(this.document);
  }

}
