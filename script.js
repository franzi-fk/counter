const main = document.querySelector("main");
const label = document.querySelector("label");
const button = document.querySelector("button");

// Get the root element
const root = document.documentElement;

let count = 0;

function reset() {
  count = 0;
  renderCountAndBg();
  button.blur(); // removes focus from button, so when pressing space or enter after clicking on reset the button does not get clicked
}

function countUp() {
  count += 1;
  renderCountAndBg();
}

function renderCountAndBg() {
  label.innerText = count;

  let cssCount = count.toString();
  if (cssCount.length > 2 && count % 100 !== 0) {
    cssCount = cssCount.slice(-2); // extracts the last two characters (digits) of the string, returns string
    root.style.setProperty("--counter", cssCount + "%");
  } else {
    root.style.setProperty("--counter", count + "%");
  }
}

// Click on main -> count up
main.addEventListener("click", countUp);

// Press enter or space -> count up
document.addEventListener("keydown", function (event) {
  if (event.code == "Enter" || event.code === "Space") countUp();
});

// Click reset button -> reset counter
button.addEventListener("click", reset);
