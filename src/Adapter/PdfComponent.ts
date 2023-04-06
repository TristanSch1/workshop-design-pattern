export abstract class PdfComponent {
    setContent(content: string): void {
        console.log("PdfComponent: setContent");
    }

    prepareDisplay(): void {
        console.log("PdfComponent: prepareDisplay");
    }

    refresh(): void {
        console.log("PdfComponent: refresh");
    }

    finishDisplay(): void {
        console.log("PdfComponent: finishDisplay");
    }

    sendToPrinter(): void {
        console.log("PdfComponent: sendToPrinter");
    }
}
