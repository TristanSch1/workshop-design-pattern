import { Control } from "./Control";

export class Select extends Control {
  constructor(name: string = "select", value?: string) {
    super(name, value);
  }
  public render(): HTMLElement {
    const select = document.createElement("select");
    console.log("Select: " + this.getValue());
    select.name = this.getName();
    select.innerHTML = `
        <option value="with_borrower">Avec emprunteur</option>
        <option value="without_borrower">Sans emprunteur</option>
    `;
    select.value = this.getValue() as string;
    select.addEventListener("change", (event) => {
      console.log("Select: " + (event.target as HTMLSelectElement).value);
      this.setValue((event.target as HTMLSelectElement).value);
      this.change();
    });
    if (this.label) {
      const container = document.createElement("div");
      container.className = "input-container";
      const label = document.createElement("label");
      label.textContent = this.label;
      label.htmlFor = this.getName();
      container.appendChild(label);
      container.appendChild(select);
      return container;
    } else {
      return select;
    }
  }
}
