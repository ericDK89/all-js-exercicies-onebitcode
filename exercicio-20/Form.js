import { Component } from "./Component.js";

export class Form extends Component {
  constructor(component, className, id) {
    super();
    super.build(component, className, id);
  }

  addNewElement(component, className, id) {
    const newElement = new Component().build(component, className, id);
    super.render().appendChild(newElement);
  }
}
