import { Document } from "./Document";

export class HtmlDocument implements Document {
    setContent(content: string): void {
        console.log("HtmlDocument: setContent");
    }

    draw(): void {
        console.log("HtmlDocument: draw");
    }

    print(): void {
        console.log("HtmlDocument: print");
    }
}
