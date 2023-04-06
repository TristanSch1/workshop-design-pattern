import { Control } from "./Control";

export abstract class Form {
  element: HTMLFormElement;
  protected controls: Control[] = [];

  protected constructor(form: HTMLFormElement, controls?: Control[]) {
    this.controls = controls || [];
    this.element = form;
  }
  public addControl(control: Control) {
    this.controls.push(control);
  }

  public handleModification(_control: Control) {
    // do nothing
  }
  public render(): void {
    console.log("Form: render");
    this.controls.forEach((control) => {
      this.element.appendChild(control.render());
    });
  }
}
