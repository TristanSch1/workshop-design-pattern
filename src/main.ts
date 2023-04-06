import "./styles/style.css";
import { FranceOrder } from "./TemplateMethod/FranceOrder";
import { Product } from "./State/Product";
import { BorrowingForm } from "./Mediator/BorrowingForm";
import { ElectricVehicleFactory } from "./AbstractFactory/ElectricVehicleFactory";
import { GasolineVehicleFactory } from "./AbstractFactory/GasolineVehicleFactory";
import { VehicleView } from "./Decorator/VehicleView";
import { AnimationProxy } from "./Proxy/AnimationProxy";
import { Film } from "./Proxy/Film";
import { Vehicle } from "./Observer/Vehicle";

const initialLog = console.log;

console.log = (message) => {
  const consoleElement = document.querySelector<HTMLDivElement>("#console")!;
  const date = new Date();
  consoleElement.innerHTML += `<p>[${date.toLocaleTimeString()}]: ${message}</p>`;
  initialLog(message);
};

const app = document.querySelector<HTMLDivElement>("#app")!;

app!.innerHTML = `
    <div id="console"></div>
    <div id="content">
      <div class="tester-container">
          <div class="tester-title">Mediator</div>
          <form id="mediator-form"></form>        
      </div>
      <div class="tester-container">
        <div class="tester-title">State</div>
        <p id="order-state"></p>
        <div class="tester-content">
        <div id="products"></div>
            <button id="add-product">Add Product</button>
            <button id="next-state">Next Order State</button>
        </div>
      </div>
      <div class="tester-container">
        <div class="tester-title">Observer</div>
        <div class="observer-content tester-content">
        <input type="text" id="brand-input" placeholder="Enter a vehicle brand" />
        <input type="text" id="description-input" placeholder="Enter a vehicle description" />
        <input type="text" id="price-input" placeholder="Enter a vehicle price" />
        <button id="update-vehicle">Update Vehicle</button>
        </div>
      </div>
    </div>
    <div id="catalog"></div>
`;

const content = document.querySelector<HTMLDivElement>("#content")!;

const electricVehicleFactory = new ElectricVehicleFactory();
const gasolineVehicleFactory = new GasolineVehicleFactory();

const vehicles = [
  electricVehicleFactory.createCar({
    brand: "peugeot",
  }),
  electricVehicleFactory.createScooter({
    brand: "renault",
  }),
  gasolineVehicleFactory.createCar({
    brand: "kymco",
  }),
  gasolineVehicleFactory.createScooter({
    brand: "yamaha",
  }),
];

//--------------------------------------------------
// State test
//--------------------------------------------------

const order = new FranceOrder();

let productIndex = 1;

const productsElement = document.querySelector<HTMLDivElement>("#products")!;
const displayProducts = () => {
  productsElement.innerHTML = "";

  order.getProducts().forEach((p) => {
    const removeButton = document.createElement("button");
    removeButton.innerHTML = `Remove ${p.name}`;
    removeButton.addEventListener("click", () => {
      order.removeProduct(p);
      displayProducts();
    });
    productsElement.innerHTML += `<div>${p.name} - ${p.price}€</div>`;
    productsElement.appendChild(removeButton);
  });
};

const orderStateElement =
  document.querySelector<HTMLParagraphElement>("#order-state")!;

const displayOrderState = () => {
  orderStateElement.innerHTML = `Order state: ${order.state.constructor.name}`;
};

document.getElementById("add-product")!.addEventListener("click", () => {
  order.addProduct(
    new Product({
      name: `Product ${productIndex}`,
      price: parseFloat((Math.random() * 100).toFixed(2)),
    })
  );
  displayProducts();
  productIndex++;
});

document.getElementById("next-state")!.addEventListener("click", () => {
  order.nextState();
  displayOrderState();
});

displayOrderState();

// --------------------------------------------------
// Mediator test
// --------------------------------------------------

const formElement = document.querySelector<HTMLFormElement>("#mediator-form")!;
new BorrowingForm(formElement);

// --------------------------------------------------
// Observer test
// --------------------------------------------------

const vehicleViews: VehicleView[] = [];
vehicles.forEach((v) => {
  const vehicleView = new VehicleView(
    v,
    new AnimationProxy(new Film(), "photo")
  );
  v.attach(vehicleView);

  vehicleViews.push(vehicleView);
});

const catalogElement = document.querySelector<HTMLDivElement>("#catalog")!;

const displayCatalog = () => {
  catalogElement.innerHTML = "";
  vehicleViews.forEach((v) => {
    catalogElement.appendChild(v.render());
  });
};

const observerContent =
  document.querySelector<HTMLDivElement>(".observer-content")!;
const displayInputs = () => {
  if (selectedVehicle) {
    brandInput.value = selectedVehicle.getBrand() || "";
    descriptionInput.value = selectedVehicle.getDescription() || "";
    priceInput.value = selectedVehicle.getPrice()
      ? selectedVehicle.getPrice()!.toString()
      : "";
  }
};

const select = document.createElement("select");
let selectedVehicle: Vehicle | undefined;
select.innerHTML = `
    <option value="undefined">Select a vehicle</option>
    ${vehicles
      .map((v, i) => {
        return `<option value="${i}">${v.getBrand()}</option>`;
      })
      .join("")}
`;
select.addEventListener("change", (e) => {
  const index = parseInt((e.target as HTMLSelectElement).value);
  selectedVehicle = vehicles[index];
  displayInputs();
});

const brandInput = document.querySelector<HTMLInputElement>("#brand-input")!;
const descriptionInput =
  document.querySelector<HTMLInputElement>("#description-input")!;
const priceInput = document.querySelector<HTMLInputElement>("#price-input")!;
const updateVehicleButton =
  document.querySelector<HTMLButtonElement>("#update-vehicle")!;

updateVehicleButton.addEventListener("click", () => {
  if (selectedVehicle) {
    selectedVehicle.setBrand(brandInput.value);
    selectedVehicle.setDescription(descriptionInput.value);
    selectedVehicle.setPrice(parseFloat(priceInput.value));
  }
  displayCatalog();
});

displayCatalog();
observerContent.prepend(select);
