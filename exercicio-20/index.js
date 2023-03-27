import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const newInput = new Input("input-test", "input-test", "text");
const newLabel = new Label(
  "label",
  "label-test",
  "label-test",
  "input-test",
  "Label: "
);

const formContainer = document.getElementById("form-container");
formContainer.append(newLabel.render(), newInput.render());

const newForm = new Form("", "form-test", "form-test");

const divContainer = document.getElementById("div-test");
divContainer.append(newForm.render());

newForm.addNewElement("button", "button-test");
