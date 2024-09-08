const buttons = document.getElementsByTagName("button");
const currValue = document.getElementById("value");

function rollDice(maxTotal) {
  const isCheating = document.getElementById("cheat").checked;
  let mathRoll = 0;
  if (isCheating) {
    mathRoll = maxTotal;
  } else {
    mathRoll = Math.floor(Math.random() * maxTotal) + 1;
  }
  if (mathRoll == maxTotal) {
    currValue.style.color = "#a93535";
  } else {
    currValue.style.color = "white";
  }
  currValue.textContent = mathRoll;
  console.log(mathRoll);
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    const maxTotal = e.target.textContent.split("").splice(1).join("");
    rollDice(maxTotal);
  });
}
