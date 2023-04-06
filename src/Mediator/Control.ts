import { Form } from "./Form";

export abstract class Control {
  protected visible: boolean = true;
  protected value: string | number | undefined;
  protected label: string | undefined;
  protected mediator: Form;
  private name: string;

  protected constructor(
    name: string,
    value?: string | number,
    label?: string,
    mediator?: Form
  ) {
    this.name = name;
    this.mediator = mediator!;
    this.value = value;
    this.label = label;
  }

  setMediator(mediator: Form) {
    this.mediator = mediator;
  }
  getValue() {
    return this.value;
  }

  getName() {
    return this.name;
  }

  getVisible() {
    return this.visible;
  }
  render(): HTMLElement {
    throw new Error("Method not implemented.");
  }

  setVisible(visible: boolean) {
    this.visible = visible;
  }

  setLabel(label: string) {
    this.label = label;
  }

  protected change() {
    this.mediator.handleModification(this);
  }

  protected setName(name: string) {
    this.name = name;
  }

  protected setValue(value: string | undefined) {
    this.value = value;
  }
}
