import CarsController from "./Controllers/CarsController.js";
import housesController from "./Controllers/HousesController.js";
// import ValuesController from "./Controllers/ValuesController.js";


class App {
  // valuesController = new ValuesController();
  carsController = new CarsController();
  housesController = new housesController();
}

window["app"] = new App();
