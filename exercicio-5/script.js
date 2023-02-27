let finished = false;

do {
  const data = prompt(
    `
    Select one of the following options:
    1. one
    2. two
    3. three
    4. four
    5. finish
    `
  );

  if (data === "5") {
    finished = true;
    alert("System is being finished.");
  } else {
    alert(`The option choose was ${data}`);
  }
} while (!finished);
