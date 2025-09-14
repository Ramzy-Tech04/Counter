//document.getElementById("number").innerText = 5

let number = document.getElementById("number")

let count=0
function Add() {
  count = count + 1
  number.textContent = count
}

let Saved = document.getElementById("saved")

function save() {
  let items = count + " - "
  Saved.textContent += items
  number.textContent = 0
  count = 0
}