import { Form } from "./Form";
import { Control } from "./Control";
import { Input } from "./Input";
import { Select } from "./Select";
import { Button } from "./Button";

export class BorrowingForm extends Form {
  coBorrowerControls: Control[] = [];
  constructor(form: HTMLFormElement, controls?: Control[]) {
    super(form, controls);
    const borrowerName = new Input("borrower_name");
    borrowerName.setMediator(this);
    borrowerName.setLabel("Nom de l'emprunteur");
    this.controls.push(borrowerName);

    const borrowerAge = new Input("borrower_age");
    borrowerAge.setMediator(this);
    borrowerAge.setLabel("Age de l'emprunteur");
    this.controls.push(borrowerAge);

    const select = new Select("select_borrower", "with_borrower");
    select.setMediator(this);
    select.setLabel("Emprunteur");
    this.controls.push(select);

    const button = new Button();
    button.setMediator(this);
    this.controls.push(button);

    const coBorrowerName = new Input("co_borrower_name");
    coBorrowerName.setMediator(this);
    coBorrowerName.setLabel("Nom du co-emprunteur");
    this.coBorrowerControls.push(coBorrowerName);

    const coBorrowerAge = new Input("co_borrower_age");
    coBorrowerAge.setMediator(this);
    coBorrowerAge.setLabel("Age du co-emprunteur");
    this.coBorrowerControls.push(coBorrowerAge);

    this.render();
  }

  public handleModification(control: Control) {
    console.log("BorrowingForm: " + control.getName() + " changed");
    if (control.getName() === "select_borrower") {
      if (control.getValue() === "without_borrower") {
        this.coBorrowerControls.forEach((control) => {
          console.log("BorrowingForm: " + control.getName() + " hidden");
          control.setVisible(false);
        });
      } else {
        this.coBorrowerControls.forEach((control) => {
          console.log("BorrowingForm: " + control.getName() + " visible");
          control.setVisible(true);
        });
      }
    }
    this.render();
  }

  public render(): void {
    console.log("BorrowingForm: render");
    this.element.innerHTML = "";
    this.coBorrowerControls.forEach((control) => {
      this.element.appendChild(control.render());
    });
    this.controls.forEach((control) => {
      this.element.appendChild(control.render());
    });
  }
}
