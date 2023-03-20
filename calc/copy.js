export const copyInput = document.getElementById("copy-btn");
export const outputInput = document.getElementById("output-result");

export const copyInputFunction = () => {
  navigator.clipboard.writeText(outputInput.value);
  copyInput.innerText = "Copied!";

  setTimeout(() => {
    copyInput.innerText = "Copy";
  }, 3500);
};
