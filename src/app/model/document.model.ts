import { BusinessPartner } from "./buisiness-partner.model";


export class Document {
    _id: number;
    dateOfRecording: string;
    dateOfCreation: string;
    transactionType: string;
    status: string;
    year: number;
    businessPartner: BusinessPartner;

    constructor(obj?:any) {
        this._id = obj && obj._id || "";
        this.dateOfRecording = obj && obj.dateOfRecording || "";
        this.dateOfCreation = obj && obj.dateOfCreation || "";
        this.transactionType = obj && obj.transactionType || "";
        this.status = obj && obj.status || "";
        this.year = obj && obj.year || 0;
        this.businessPartner = obj && new BusinessPartner(obj.businessPartner) 
        || new BusinessPartner();
    }
}