export class Component {
  #domRef = null;

  constructor() {
    this.component = null;
  }

  build(component, className, id) {
    const newComponent = document.createElement(component);
    this.component = newComponent;
    this.component.className = className;
    this.component.id = id;
  }

  readValue() {
    return this.component.value;
  }

  render() {
    return this.component;
  }
}
