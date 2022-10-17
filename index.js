// /*
// 	Designed by: Hash Elias
// 	Original image: https://dribbble.com/shots/5425482-LOST
// */

// const pug = require("pug");
// const path = require("path");

// const startTrigger = document.querySelector("#start");
// const a = document.querySelector("#a");

// const startAnimation = () => {
//   startTrigger.classList.add("is-start-visible");
//   a.loop = true;
//   a.play();
//   startTrigger.removeEventListener("click", startAnimation);
//   setTimeout(() => startTrigger.classList.add("is-start-hidden"), 2001);
// };

// startTrigger.addEventListener("click", startAnimation);

// let compiledFile = pug.compileFile(path.join(__dirname, "src", "index.pug"));

// console.log(compiledFile);

const pug = require("pug");

pug.compile("index.pug");

