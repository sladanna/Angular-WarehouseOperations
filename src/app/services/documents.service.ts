import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleList } from '../model/article-list';
import { DocumentList } from '../model/document-list.model';
import { Document } from '../model/document.model'
import { ItemList } from '../model/item-list.model';

const baseURL = 'http://localhost:3000/api/documents';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }

  getDocuments(params?:any): Observable<DocumentList> {
    let queryParams = {}

    if(params) {
      queryParams = {
        params: new HttpParams()
        .set("page", params.page || "")
        .set("pageSize", params.pageSize || "")
        .set("sort", params.sort || "")
        .set("sortDirection", params.sortDirection || "")
      }
    }

    return this.http.get(baseURL, queryParams).pipe(map((data: any) => {
      return new DocumentList(data);
    }))
  }

  
  get(id: number): Observable<Document> {
    return this.http.get(`${baseURL}/${id}`).pipe(map((res: any) => {
      return new Document(res);
    }));
  }

  getItems(documentId: number): Observable<ItemList> {
    return this.http.get(`${baseURL}/${documentId}/items`).pipe(map((data:any) => {
      return new ItemList(data);
    }))
  } 


  postItem(documentId: number, data: any): Observable<any> {
    return this.http.post(`${baseURL}/${documentId}/items`, data);
  }

  
  recordDocument(document: Document): Observable<Document> {
    console.log(document);
    return this.http.put(`${baseURL}/${document._id}`, document).pipe(map(res => {
      return new Document(res);
    }));
  }

  getAllArticles(): Observable<ArticleList> {
    return this.http.get("http://localhost:3000/api/articles").pipe(map(res => {
      return new ArticleList(res);
    }));
  }
}
