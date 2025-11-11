//your JS code here. If required.
const element = document.getElementById("level");

let levelCount = 0;
let current = element;


while (current) {
  levelCount++;
  current = current.parentElement; // move to parent
}


alert(`The level of the element is: ${levelCount}`);
