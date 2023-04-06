import { GraphicVehicleComponent } from "./GraphicVehicleComponent";

export class Decorator implements GraphicVehicleComponent {
    protected component: GraphicVehicleComponent;

    constructor(component: GraphicVehicleComponent) {
        this.component = component;
    }

    display(): void {
        this.component.display();
    }
}
