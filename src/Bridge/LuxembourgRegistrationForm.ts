import { RegistrationForm } from "./RegistrationForm";
import { FormImplementation } from "./FormImplementation";

export class LuxembourgRegistrationForm extends RegistrationForm {
    constructor(implementation: FormImplementation, registrationNumber?: string) {
        super(implementation, registrationNumber);
    }

    display(): void {
        console.log(`LuxembourgRegistrationForm: display ${this.registrationNumber}`);
    }

    protected controlInput(): boolean {
        const regex = /^[A-Z]{2}[0-9]{6}$/;
        if (this.registrationNumber && regex.test(this.registrationNumber)) {
            console.log(`LuxembourgRegistrationForm: controlInput ${this.registrationNumber}`);
            return true;
        } else {
            console.log(`LuxembourgRegistrationForm: controlInput ${this.registrationNumber} is not valid`);
            return false;
        }
    }
}
