const body = document.getElementById("body");

export const switchTheme = () => {
  if (body.className === "body-dark-theme") {
    body.classList.add("body-light-theme");
    body.classList.remove("body-dark-theme");
  } else {
    body.classList.add("body-dark-theme");
    body.classList.remove("body-light-theme");
  }
};
