import { FormImplementation } from "./FormImplementation";

export class RegistrationForm {
    registrationNumber: string | undefined;
    implementation: FormImplementation;

    constructor(implementation: FormImplementation, registrationNumber?: string) {
        this.implementation = implementation;
        this.registrationNumber = registrationNumber;
    }

    display(): void {
        console.log(`RegistrationForm: display ${this.registrationNumber}`);
    }

    manageInput(): boolean {
        return this.controlInput();
    }

    protected controlInput(): boolean {
        const regExp = /^[a-zA-Z0-9]+$/;
        if (this.registrationNumber && regExp.test(this.registrationNumber)) {
            console.log(`RegistrationForm: controlInput ${this.registrationNumber}`);
            return true;
        } else {
            console.log(`RegistrationForm: controlInput ${this.registrationNumber} is not valid`);
            return false;
        }
    }
}
