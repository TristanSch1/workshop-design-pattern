import { Control } from "./Control";

export class Input extends Control {
  constructor(name: string) {
    super(name);
  }
  public render(): HTMLElement {
    const input = document.createElement("input");
    input.type = "text";
    input.name = this.getName();
    input.value = this.getValue() ? (this.getValue() as string) : "";
    input.style.display = this.getVisible() ? "block" : "none";
    input.addEventListener("input", (event) => {
      this.setValue((event.target as HTMLInputElement).value);
      this.change();
    });

    if (this.label && this.getVisible()) {
      const container = document.createElement("div");
      container.className = "input-container";
      const label = document.createElement("label");
      label.textContent = this.label;
      label.htmlFor = this.getName();
      container.appendChild(label);
      container.appendChild(input);
      return container;
    } else {
      return input;
    }
  }
}
