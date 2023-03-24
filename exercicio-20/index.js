import { Input } from "./Input.js";
import { Label } from "./Label.js";

const newInput = new Input("input", "input-test", "input-test", "text");
const newLabel = new Label(
  "label",
  "label-test",
  "label-test",
  "input-test",
  "Label Test: "
);

const formContainer = document.getElementById("form-container");
formContainer.append(newLabel.render(), newInput.render());
