import { DocumentItem } from "./item.model";


export class ItemList {
    count: number;
    results: DocumentItem[];

    constructor(obj?:any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((x: any) => {
            return new DocumentItem(x);
        }) || []
    }
}