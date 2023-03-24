import { Component } from "./Component.js";

export class Label extends Component {
  constructor(component, className, id, htmlFor, value) {
    super();
    super.build(component, className, id);
    this.htmlFor = htmlFor;
    this.component.innerText = value;
  }
}
