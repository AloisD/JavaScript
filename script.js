"use strict";

/* const bearsPictures = [
  "https://placebear.com/500/279",
  "https://placebear.com/500/280",
  "https://placebear.com/500/300",
  "https://placebear.com/500/302",
  "https://placebear.com/500/305"
];

let billsPicture = document.querySelectorAll('img');

for (let i = 0; i < billsPicture.length; i ++) {
  billsPicture[i].src = bearsPictures[i];
} */

/* const newCatImage = document.createElement('img');
newCatImage.src = "https://placekitten.com/408/287";
const secondCard = document.querySelector('.second-card');
secondCard.appendChild(newCatImage); */

/* let userName = prompt("Quel est votre nom ?");
const title = document.querySelector('h1');
title.innerHTML = `Hello, ${userName}!`; */

/* const catToMoveUp = document.querySelector('#second-cat-img');
const firstDiv = document.querySelector('#first-div');
firstDiv.appendChild(catToMoveUp); */

/* const dogPictures = document.querySelectorAll('.img-dog');
for (let i = 0; i < dogPictures.length; i ++) {
  dogPictures[i].remove();
} */

/* const box = document.querySelector('.box');
box.style.backgroundColor = "yellow";
box.style.width = '400px';
box.style.height = '300px';

const title = document.querySelector('.title');
title.style.color = "lightblue";
title.style.height = '60px'; */

/* const newBox = document.createElement('div');
newBox.classList.add('box');
const container = document.querySelector('.container-boxes');
container.appendChild(newBox);

const boxes = document.querySelectorAll('.box');

for (let i = 0; i < boxes.length; i ++) {
  boxes[i].onclick = function(){
    boxes[i].style.backgroundColor = "red";
  }
} */

/* const image = document.querySelector('.img-dogs');
image.addEventListener('click', function(){
  image.src = "https://placekitten.com/408/287";
  image.alt = "picture of cat";
})

const title = document.querySelector('.title');
title.addEventListener('mouseover', function(){
  title.style.color = "red";
})
title.addEventListener('mouseleave', function(){
  title.style.color = "black";
}) */

/* const form = document.querySelector("#form");
const toDo = document.querySelector("#todoInput");
const list = document.querySelector("#todolist");

form.onsubmit = function(event) {
  event.preventDefault();
  const newListItem = document.createElement('li');
  newListItem.innerHTML = `${toDo.value}`;
  list.appendChild(newListItem);
  toDo.value = "";
}; */

const button = document.querySelector('.dropdown-btn');
const menu = document.querySelector('.dropdown-menu-content');

button.addEventListener("click", function(event) {
  console.log(event);
  event.preventDefault();
  menu.classList.toggle('hidden');
});