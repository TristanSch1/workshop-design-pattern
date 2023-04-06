import { Bundle } from "./Bundle";
import { OrderForm } from "./OrderForm";
import { TransferCertificate } from "./TransferCertificate";
import { ApplicationRegistration } from "./ApplicationRegistration";
import { Document } from "./Document";

class BlankBundle extends Bundle {
    private static instance: BlankBundle;

    constructor() {
        super();

        this.setDocuments([
            new OrderForm(),
            new TransferCertificate(),
            new ApplicationRegistration(),
        ]);
    }

    static getInstance(): BlankBundle {
        if (!BlankBundle.instance) {
            BlankBundle.instance = new BlankBundle();
        }
        return BlankBundle.instance;
    }

    addDocument(document: Document): void {
        this.documents.push(document);
    }

    removeDocument(document: Document): void {
        const index = this.documents.indexOf(document);
        this.documents.splice(index, 1);
    }
}

export { BlankBundle };
