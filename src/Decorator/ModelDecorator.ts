import { GraphicVehicleComponent } from "./GraphicVehicleComponent";
import { Decorator } from "./Decorator";

export class ModelDecorator extends Decorator {
  constructor(component: GraphicVehicleComponent) {
    super(component);
  }

  displayTechnicalInfos(): void {
    console.log("ModelDecorator: displayTechnicalInfos");
  }

  display(): void {
    this.component.display();
    this.displayTechnicalInfos();
  }
}
