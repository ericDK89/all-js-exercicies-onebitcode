export class Component {
  #element = null;

  constructor(tag, parent, ...options) {
    this.tag = tag;
    this.parent = parent;
    this.options = options;
  }

  build(component, className, id) {
    this.#element = document.createElement(component);
    Object.assign(this.#element, this.options);
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
