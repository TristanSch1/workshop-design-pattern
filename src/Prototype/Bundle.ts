import { Document } from "./Document";

export class Bundle {
    protected documents: Document[] = [];

    getDocuments(): Document[] {
        return this.documents;
    }

    setDocuments(documents: Document[]): void {
        this.documents = documents;
    }
}
