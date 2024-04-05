let url = "http://localhost:3000/recipies";
let ul = document.querySelector("ul");
fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((db) => {
    updret(db);
  })
  .catch();

let updret = (id) => {
  id.forEach((element) => {
    let li = document.createElement("li");
    let liH1 = document.createElement("h1");
    let liImg = document.createElement("img");
    let liTime = document.createElement("p");
    let liIngred = document.createElement("p");

    liIngred.classList.add("masalig");

    liH1.textContent = element.title;
    liTime.textContent = `Time: ${element.cookingTime}`;
    liImg.src = element.imageUrl;
    liIngred.innerHTML = "<b>Ingredients</b>:";
    element.ingredients.forEach((item) => {
      liIngred.innerHTML += ` ${item},`;
    });

    li.appendChild(liH1);
    li.appendChild(liTime);
    li.appendChild(liImg);
    li.appendChild(liIngred);
    ul.appendChild(li);
  });
};
