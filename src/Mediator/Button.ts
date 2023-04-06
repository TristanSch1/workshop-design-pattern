import { Control } from "./Control";

export class Button extends Control {
  constructor() {
    super("button");
  }
  public render(): HTMLButtonElement {
    const button = document.createElement("button");
    button.type = "button";
    button.name = this.getName();
    button.value = this.getValue() as string;
    button.textContent = "Valider";

    return button;
  }
}
