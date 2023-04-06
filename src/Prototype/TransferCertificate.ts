import { Document } from "./Document";

export class TransferCertificate extends Document {
    content: string | undefined;

    constructor(content?: string) {
        super("transferCertificate");
        this.content = content;
    }

    print(): void {
        console.log("TransferCertificate: print");
    }

}
