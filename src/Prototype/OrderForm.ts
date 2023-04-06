import { Document } from "./Document";

export class OrderForm extends Document {
    content: string | undefined;

    constructor(content?: string) {
        super("orderForm");
        this.content = content;
    }

    print(): void {
        console.log("OrderForm: print");
    }

}
