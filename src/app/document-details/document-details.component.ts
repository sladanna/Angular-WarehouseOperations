import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemList } from '../model/item-list.model';
import { Document } from '../model/document.model'; 
import { DocumentItem } from '../model/item.model';
import { DocumentsService } from '../services/documents.service';
import { Article } from '../model/article';
import { ArticleList } from '../model/article-list';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit {

  documentId: number = 0;
  document: Document = new Document()
  articles: Article[] = []

  items: ItemList = new ItemList();

  constructor(private route: ActivatedRoute,
              private service: DocumentsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.documentId = params['id']
      this.getDocument();
      
      this.service.getAllArticles().subscribe((articles: ArticleList) => {
        this.articles = articles.results;
        this.getDocumentItems();
      })
    })
  }

  getDocumentItems(): void {
    this.service.getItems(this.documentId).subscribe((data: any) => {
      this.items.count = data.count;
      this.items.results = data.results.map((item: DocumentItem) => {
        return this.mapArticle(item);
      })
    })
  }

  getDocument(): void {
    this.service.get(this.documentId).subscribe((doc: Document) => {
      this.document = doc;
    })
  }


  newItem(item: DocumentItem) {
    this.service.postItem(this.documentId, item).subscribe((data: any) => {
      this.getDocumentItems();
    });
  }

  recordDocument(document: Document) {
    this.service.recordDocument(document).subscribe(doc => this.document = doc);
  }

  private mapArticle(item: DocumentItem): DocumentItem {
    for(let i = 0; i < this.articles.length; i++) {
      if(this.articles[i]['code'] == item.article) {
        item.article = this.articles[i]['name'];
        return item;
      }
    }
    return item;
  }

}
