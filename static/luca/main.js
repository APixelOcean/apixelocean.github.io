import { shots } from './shots.js';

function setDetails(d) {
  const details = document.getElementById("details").querySelector("p");
  details.innerHTML = d ?  `
    <span>Attempt #${d.attempt}</span><br>
    <span>Result</span>: ${d.result === 1 ? 'Success' : 'Failure'}<br>
    <span>Consecutive Successes:<span> ${d.sequence}<br>
    ${d.details}
  `
  : "No attempt selected.";
}

function clearHighlights(g) {
  Array.from(g.children).forEach(shot => {
    shot.classList.remove("highlight");
  });
}

function applyHighlight(s) {
  s.classList.add("highlight");
}

function setHighlights(g, s) {
  if (s.classList.contains("highlight")) {
    clearHighlights(g);
    setDetails();
  } else {
    clearHighlights(g);
    applyHighlight(s);
  }
  
}

function constructGrid() {
  const resultsDict = {0 : "–", 1: ":D"};
  const ss = shots.shots;
  const gridEle = document.getElementById("shots-container");
  ss.forEach(shot => {
    const shotEle = document.createElement("div");
    shotEle.textContent = resultsDict[shot.result];
    shotEle.classList.add("attempt");
    shotEle.addEventListener("click", (event) => {
      setDetails(shot);
      setHighlights(gridEle, event.target);
    })
    gridEle.appendChild(shotEle);
  })
}

export function checkPassword() {
  const password = "luca " + "x" + " phyllis";
  const userInput = prompt("Enter Password:");
  if (userInput === password) {
      document.querySelector("body").classList.remove("hidden");
  } else {
      alert("Incorrect password. Access denied.");
  }
}

window.checkPassword = checkPassword;
constructGrid();