import { Component } from "./Component.js";

export class Input extends Component {
  constructor(component, className, id, type) {
    super();
    super.build((component = "input"), className, id);
    this.component.type = type;
    this.component.title = "input-test";
  }
}
