import { Document } from "./document.model";



export class DocumentList {
    count: number;
    results: Document[];

    constructor(obj?:any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((x:any) => {
            return new Document(x);
        }) || new Array<Document>();
    }
}