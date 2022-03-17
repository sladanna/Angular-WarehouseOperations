

export class BusinessPartner {
    name: string;
    city: string;
    address: string;

    constructor(obj?:any) {
        this.name = obj && obj.name || "";
        this.city = obj && obj.city || "";
        this.address = obj && obj.address || "";
    }
}