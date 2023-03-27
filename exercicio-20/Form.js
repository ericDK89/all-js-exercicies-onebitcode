import { Component } from "./Component.js";

export class Form extends Component {
  constructor(component, className, id) {
    super();
    super.build((component = "form"), className, id);
  }

  addNewElement(component, className, id) {
    const newElement = new Component();
    const nada = newElement.build(component, className, id);
    newElement.render(nada);
  }
}
