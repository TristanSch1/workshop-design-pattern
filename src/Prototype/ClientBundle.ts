import { Bundle } from "./Bundle";
import { BlankBundle } from "./BlankBundle";
import { Document } from "./Document";

export class ClientBundle extends Bundle {

    constructor() {
        super();
    }
    
    create(content: { orderForm: string, transferCertificate: string, ApplicationRegistration: string }) {
        const documents: Document[] = BlankBundle.getInstance().getDocuments();
        documents.forEach(document => {
            this.setDocuments([...this.documents, document.clone()]);
            this.documents.find(doc => doc.name === document.name)!.fill(content[document.name as keyof typeof content]);
        });
    }

    display(): void {
        console.log("ClientBundle: display");
        this.documents.forEach(document => {
            document.display();
        });
    }

    print(): void {
        console.log("ClientBundle: print");
        this.documents.forEach(document => {
            document.print();
        });
    }

}
