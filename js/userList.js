import { fetchApi } from "./fetchAPI.js";

const users = document.querySelector("#users");

fetchApi("http://localhost:3000/users")
  .then(data => {
    console.log(data);
    let htmls = data.map(item => {
      return `
        <div class= "users__info">
          <div class = "users__image">
            <img src="${item.image}">
          </div>
          <div class="users__name">
           Name: ${item.firstName} ${item.lastName}
          </div>
          <div class="users__age">Age: ${item.age} </div>
          <div class="users__gender">Gender: ${item.gender} </div>
          <div class="users__email">Email: ${item.email} </div>
        </div>
      `;
    })
    
    users.innerHTML = htmls.join("");
  })
