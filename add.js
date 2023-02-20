const ENDPOINT = "https://melon-potent-period.glitch.me/";

// document.getElementById("btn-submit").addEventListener("submit", (event) => {
//   event.preventDefault();

//   let output = document.getElementById("text-input"); //+
//   let inputValue = output && output.value;
//   console.log(inputValue);
//   let outputYouCanSee = document.getElementById("output");
//   console.log(outputYouCanSee);

//   const message = `You added a new skill`;

//   if (output) {
//     output.textContent = message;
//   }
// });

//button for go to index

document.getElementById("view_skill").addEventListener("click", () => {
  window.location.href = "index.html";
});

//----------submit btn + text input + value in web --------------------

let inputValue = output && output.value;
const informationInIndex = function (e) {};
let submitBtn = document.getElementById("btn-submit");
submitBtn.addEventListener("click", () => {
  console.log(submitBtn); // clicked

  let newElementText = document.getElementById("text-input");
  newElementText.textContent = newElementText.value;
  console.log(newElementText);
  let textFromInput = newElementText.value;
  console.log(textFromInput);
  let output = document.getElementById("output");
  output.append(textFromInput);
  window.document.location = "./index.html";
});
//--------------------------------------------
//--------------PVZ---------------------------
// console.log(inputValue);

// addButton);

// function addButton() {
//   let inputText = getElementById("text-input");
//   console.log(inputText);
//   //   const newElement = document.createElement("p");

//   //   newElement.innerHTML = inputText.value;
//   //   // window.location.href = "add.html";
//   //   let output = document.getElementById("output");
//   //   output.append(inputText);
// }

// addButton();

// async function getData() {
//   //sendData
//   const pElement = document.getElementById("text-input").value;

//   const price = document.getElementById("price-input").value;

//   const description = document.getElementById("description-input").value;

//   const city = document.getElementById("city-input").value;

//   const dataToSend = {
//     image: img,
//     city: city,
//     price: parseInt(price),
//     description: description,
//   };

//   const response = await fetch(ENDPOINT, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(dataToSend),
//   });
// }

// document
//   .getElementById("add-property-button")
//   .addEventListener("click", sendData);
