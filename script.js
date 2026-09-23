"use strict";

const diceFields = [...document.querySelectorAll(".die-value")];
const diceFaces = [...document.querySelectorAll(".face")];
const rollButton = document.querySelector("#roll-button");
const totalField = document.querySelector("#total");
const themeButton = document.querySelector("#theme-button");
let rollCount = 0;

// The nine positions run left to right, from the top row to the bottom.
const pipPatterns = [
  [4],
  [0, 8],
  [0, 4, 8],
  [0, 2, 6, 8],
  [0, 2, 4, 6, 8],
  [0, 2, 3, 5, 6, 8]
];

// Create the dots once. Each roll only changes which dots are visible.
diceFaces.forEach((face) => {
  for (let position = 0; position < 9; position += 1) {
    const pip = document.createElement("span");
    pip.className = "pip";
    face.append(pip);
  }
});

function rollDice() {
  const values = diceFields.map((field, index) => {
    // Math.random() is at least zero and less than one.
    const value = Math.floor(Math.random() * 6) + 1;
    field.value = String(value);
    [...diceFaces[index].children].forEach((pip, position) => {
      pip.classList.toggle("visible", pipPatterns[value - 1].includes(position));
    });
    return value;
  });

  totalField.value = String(values.reduce((sum, value) => sum + value, 0));
  rollCount += 1;
  document.querySelector("#roll-note").textContent = rollCount === 1
    ? "Your first roll is ready. Roll again whenever you like."
    : "Fresh dice. Ready for your next move.";
  document.querySelector("#announcement").textContent =
    `Roll ${rollCount}: ${values.join(", ")}. Total: ${totalField.value}.`;

  // Retain keyboard focus after a mouse or keyboard roll.
  rollButton.focus({ preventScroll: true });
}

function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  themeButton.setAttribute("aria-pressed", String(dark));
  themeButton.textContent = dark ? "Light mode" : "Dark mode";
}

setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
themeButton.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme !== "dark");
});

// A focused native button already responds to Enter and Space.
rollButton.addEventListener("click", rollDice);
window.addEventListener("load", rollDice, { once: true });
