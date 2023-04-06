import { FormImplementation } from "./FormImplementation";

export class FormAppleImpl implements FormImplementation {
    drawText(): void {
        console.log("FormAppleImpl: drawText");
    }

    handleInput(): void {
        console.log("FormAppleImpl: handleInput");
    }
}
