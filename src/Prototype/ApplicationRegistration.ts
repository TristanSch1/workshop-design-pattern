import { Document } from "./Document";

export class ApplicationRegistration extends Document {
    content: string | undefined;

    constructor(content?: string) {
        super("applicationRegistration");
        this.content = content;
    }

    print(): void {
        console.log("ApplicationRegistration: print");
    }
}
