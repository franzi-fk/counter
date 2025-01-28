const main = document.querySelector("main");
const label = document.querySelector("label");
const button = document.querySelector("button");

// Get the root element
const root = document.documentElement;

let count = 0;

function reset() {
  count = 0;
  label.innerText = count;
  root.style.setProperty("--counter", "0%");
  button.blur(); // removes focus from button, so when pressing space or enter after clicking on reset the button does not get clicked
}

function countUp() {
  count += 1;
  label.innerText = count;

  if (count % 100 === 0) {
    root.style.setProperty("--counter", "0%");
  } else {
    root.style.setProperty("--counter", `${count % 100}%`); // accesses and sets the --counter in CSS
  }
}

// Click on main -> count up
main.addEventListener("click", countUp);

// Press enter or space -> count up
document.addEventListener("keydown", function (event) {
  if (event.key === " " || event.key === "Enter") {
    countUp();
  }
});

// Click reset button -> reset counter
button.addEventListener("click", reset);
