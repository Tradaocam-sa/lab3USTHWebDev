import { fetchApi } from "./fetchAPI.js";

const posts = document.querySelector("#posts");

fetchApi("http://localhost:3000/posts")
  .then(data => {
    console.log(data);
    let htmls = data.map(item => {
      return `
        <div class= "post__list">
          - ${item.title}
        </div>
      `;
    })
    
    posts.innerHTML = htmls.join("");
  })
