const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const bd = document.querySelector("body");
bgImage.src = `./img/${chosenImage}`;
bd.appendChild(bgImage);
