import { RegistrationForm } from "./RegistrationForm";
import { FormImplementation } from "./FormImplementation";

export class FranceRegistrationForm extends RegistrationForm {
    constructor(implementation: FormImplementation, registrationNumber?: string) {
        super(implementation, registrationNumber);
    }

    display(): void {
        console.log(`FranceRegistrationForm: display ${this.registrationNumber}`);
    }

    protected controlInput(): boolean {
        const regex = /[A-HJ-NP-TV-Z]{2}[\s-]{0,1}[0-9]{3}[\s-]{0,1}[A-HJ-NP-TV-Z]{2}|[0-9]{2,4}[\s-]{0,1}[A-Z]{1,3}[\s-]{0,1}[0-9]{2}/;
        if (this.registrationNumber && regex.test(this.registrationNumber)) {
            console.log(`FranceRegistrationForm: controlInput ${this.registrationNumber}`);
            return true;
        } else {
            console.log(`FranceRegistrationForm: controlInput ${this.registrationNumber} is not valid`);
            return false;
        }
    }
}
