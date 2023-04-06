import { GraphicVehicleComponent } from "./GraphicVehicleComponent";
import { Animation } from "../Proxy/Animation";
import { Observer } from "../Observer/Observer";
import { Vehicle } from "../Observer/Vehicle";

export class VehicleView implements GraphicVehicleComponent, Observer {
  subject: Vehicle;
  animation: Animation;

  constructor(subject: Vehicle, animation: Animation) {
    this.subject = subject;
    this.animation = animation;
  }

  display(): void {
    console.log("VehicleView: display");
    console.log(
      `Vehicle ${this.subject.getDescription()} for ${this.subject.getPrice()}`
    );
  }

  update(): void {
    console.log("VehicleView: update");
    this.render();
  }

  redraw(): void {
    console.log("VehicleView: redraw");
  }

  render(): HTMLElement {
    const container = document.createElement("div");
    container.classList.add("vehicle-container");
    container.innerHTML += `
        <div class="vehicle-title">${this.subject.getBrand()}</div>
    `;
    if (this.subject.getDescription()) {
      container.innerHTML += `
        <div class="vehicle-description">Description: ${this.subject.getDescription()}</div>
      `;
    }

    if (this.subject.getPrice()) {
      container.innerHTML += `
        <div class="vehicle-price">Price: ${this.subject.getPrice()}</div>
      `;
    }

    container.innerHTML += `
    <div class="vehicle-info">Type: ${this.subject.getType()}</div>
    `;

    container.innerHTML += `
    <div class="vehicle-info">Motor: ${this.subject.getMotor()}</div>
    `;

    return container;
  }
}
