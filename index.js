const letter = [
  "A","B","C","D","E","F","G",
  "H","I","J","K","L","M","N",
  "O","P","Q","R","S","T","U",
  "V","W","X","Y","Z",
  "a","b","c","d","e","f","g",
  "h","i","j","k","l","m","n",
  "o","p","q","r","s","t","u",
  "v","w","x","y","z"
]

const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbol = [
  "~","`","!","@","#","$",
  "%","^","&","*","(",")",
  "_","-","+","=","{","[",
  "}","]",",","|",":",";",
  "<",">",".","?"
]

let passOne = document.getElementById("passOne");
let passTwo = document.getElementById("passTwo");
let error = document.getElementById("error");

function generatePasswords() {
  passOne.textContent = "";
  passTwo.textContent = "";
  let length = document.getElementById("length").value;
  let numbers = document.getElementById("numbers").checked;
  let symbols = document.getElementById("symbols").checked;
  let lists = [];
  error.textContent = "";

  if (length < 8 || length > 18) {
    error.textContent = "The length is outside the parameters. Try again."
  } else if (numbers === false && symbols === true) { /* LETTERS + SYMBOLS */
    for (let i = 0; i < length; i++) {
      lists = [letter, symbol];
      let selectedList = lists[Math.floor(Math.random() * lists.length)]
      passOne.textContent += selectedList[Math.floor(Math.random() * selectedList.length)];
      passTwo.textContent += selectedList[Math.floor(Math.random() * selectedList.length)];
      }
  } else if (symbols === false && numbers === true) { /* LETTERS + NUMBERS */
    for (let i = 0; i < length; i++) {
      lists = [letter, number];
      let selectedList = lists[Math.floor(Math.random() * lists.length)]
      passOne.textContent += selectedList[Math.floor(Math.random() * selectedList.length)];
      passTwo.textContent += selectedList[Math.floor(Math.random() * selectedList.length)];
      }
  } else if (numbers === false && symbols === false) { /* ALL LETTERS */
    for (let i = 0; i < length; i++) {
    lists = [letter];
    let selectedList = lists[Math.floor(Math.random() * lists.length)]
    passOne.textContent += selectedList[Math.floor(Math.random() * selectedList.length)];
    passTwo.textContent += selectedList[Math.floor(Math.random() * selectedList.length)];
    }
  } else { /* ALL CHARACTERS */
    for (let i = 0; i < length; i++) {
      lists = [letter, number, symbol];
      let selectedList = lists[Math.floor(Math.random() * lists.length)]
      passOne.textContent += selectedList[Math.floor(Math.random() * selectedList.length)];
      passTwo.textContent += selectedList[Math.floor(Math.random() * selectedList.length)];
    }
  }
}

function copyPassword(button) {
  if (button === passOne) {
    let text = document.getElementById("passOne").innerText;
    navigator.clipboard.writeText(text);
    console.log("Password Copied");
  } else if (button === passTwo) {
    let text = document.getElementById("passTwo").innerText;
    navigator.clipboard.writeText(text);
    console.log("Password Copied");
  }
}


