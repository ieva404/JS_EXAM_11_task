const ENDPOINT = "https://melon-potent-period.glitch.me/";

console.log(ENDPOINT);
//------mygtukas--ADD--veikia
document.getElementById("add-skill-button").addEventListener("click", () => {
  window.location.href = "add.html";
});

// buttonClicked.addEventListener("click", goToAdd);

// function goToAdd() {
//     document.getElementById("add-skill-button").addEventListener("click", () => {
//   window.location.href = "add.html";
//   //   });
// }

// goToAdd();

// buttonClicked.addEventListener("click", getData); // liseneris su funkcijos paleidimu paimti data
//--------------------PVZ----------------------
// async function getData() {
//     try {
//       let response = await fetch("https://melon-potent-period.glitch.me/");
//       if (response.ok) {

//         let result = await response.json();

//         for (let i = 0; i < result.length; i++) {
//           //---------append---login------------
//           let divForOutput = document.getElementById("output");
//           let pElForLogin = document.createElement("p");

//           let usersLogins = `<p>${result[i].login}</p>`;
//           if (result[i + 1]) {
//             usersLogins += `<p>${result[i + 1].login}</p>`;
//           }
//           pElForLogin.innerHTML = result[i].login;
//           pElForLogin.style.fontSize = "20px";

//           //----------append----image-------------
//           let imgElForPhotos = document.createElement("img");
//           imgElForPhotos.src = result[i].avatar_url;

//           let usersPhotos = `<img>${result[i].avatar_url}`;
//           if (result[i + 1]) {
//             usersPhotos += `<img>${result[i + 1].avatar_url}`;
//           }
//           imgElForPhotos.innerHTML = result[i].avatar_url;
//           imgElForPhotos.style.borderRadius = "15px";
//           imgElForPhotos.style.height = "200px";

//           divForOutput.append(pElForLogin, imgElForPhotos);
//         }
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

// fetch(ENDPOINT)
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//     data = result;
//   })
//   .catch((error) => console.error(error));
