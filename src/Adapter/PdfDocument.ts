import { Document } from "./Document";
import { PdfComponent } from "./PdfComponent";

export class PdfDocument implements Document {
    component: PdfComponent;

    constructor(component: PdfComponent) {
        this.component = component;
    }

    setContent(content: string): void {
        this.component.setContent(content);
    }

    draw(): void {
        this.component.prepareDisplay();
        this.component.refresh();
        this.component.finishDisplay();
    }

    print(): void {
        this.component.sendToPrinter();
    }
}
