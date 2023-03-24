import { Component } from "./Component.js";

export class Input extends Component {
  constructor(component, className, id, type) {
    super();
    super.build(component, className, id);
    this.component.type = type;
  }
}
