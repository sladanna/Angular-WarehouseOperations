import { Component, OnInit } from '@angular/core';
import { DocumentList } from '../model/document-list.model';
import { DocumentsService } from '../services/documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents: DocumentList = new DocumentList();

  showSettings = false;

  params = {
    page: 1,
    pageSize: 10,
    sort: "",
    sortDirection: "asc"
  }

  
  columns = {
    "dateOfCreation": true,
    "dateOfRecording": true,
    "transactionType": true,
    "status": true,
    "businessPartner": true,
    "businessPartnerLocation": true,
    "year": true
  };

  constructor(private documentsService: DocumentsService) { }

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments(): void {
    this.documentsService.getDocuments(this.params).subscribe((data: DocumentList) => {
      console.log(data);
      this.documents = data;
    })
  }

  changeSort(newSort: string): void {
    if (newSort === this.params.sort) {
      //this.params.sortDirection = this.params.sortDirection == "asc" ? "desc" : "asc"
      if(this.params.sortDirection == "asc") {
        this.params.sortDirection = "desc";
      } else {
        this.params.sortDirection = "asc";
      }
    } else {
      this.params.sortDirection = "asc"
    }

    this.params.sort = newSort;
    this.getDocuments();
  }

}
