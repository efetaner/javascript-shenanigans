// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
// }



let hcount = 0
let acount = 0

//home
let homeParagraph = document.getElementById("home-paragraph")

function hincrementone() {
  hcount += +1
  homeParagraph.textContent = hcount
}

function hincrementtwo() {
  hcount += +2
  homeParagraph.textContent = hcount
}

function hincrementthree() {
  hcount += +3
  homeParagraph.textContent = hcount
}

function hdecrementone() {
  hcount -= 1
  homeParagraph.textContent = hcount
}
//away
let awayParagraph = document.getElementById("away-paragraph")

function aincrementone() {
  acount += +1
  awayParagraph.textContent = acount
}

function aincrementtwo() {
  acount += +2
  awayParagraph.textContent = acount
}

function aincrementthree() {
  acount += +3
  awayParagraph.textContent = acount
}

function adecrementone() {
  acount -= 1
  awayParagraph.textContent = acount
}
// reset

function resetscore() {
  homeParagraph.textContent = 0
  awayParagraph.textContent = 0
  hcount=0
  acount=0
}