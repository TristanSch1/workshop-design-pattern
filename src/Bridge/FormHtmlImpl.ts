import { FormImplementation } from "./FormImplementation";

export class FormHtmlImpl implements FormImplementation {
    drawText(): void {
        console.log("FormHtmlImpl: drawText");
    }

    handleInput(): void {
        console.log("FormHtmlImpl: handleInput");
    }
}
