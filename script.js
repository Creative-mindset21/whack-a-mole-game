const cursor = document.getElementById("cursor");
const holes = [...document.querySelectorAll(".hole")];
const scoreDisplay = document.querySelector("h1 span");
const sound = new Audio("./assets/smash.mp3");
let count = 0;

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

window.addEventListener("mousedown", () => {
  cursor.classList.add("active");
});

window.addEventListener("mouseup", () => {
  cursor.classList.remove("active");
});

function run() {
  const i = Math.floor(Math.random() * holes.length);
  const hole = holes[i];
  const img = document.createElement("img");
  let timer = null;

  img.classList.add("mole");
  img.src = "./assets/mole.png";
  hole.appendChild(img);

  img.addEventListener("click", () => {
    count += 10;
    sound.play();
    scoreDisplay.textContent = count;
    img.src = "./assets/mole-whacked.png";
    clearTimeout();

    setTimeout(() => {
      hole.removeChild(img);
      run();
    }, 500);
  });

  timer = setTimeout(() => {
    hole.removeChild(img);
    run();
  }, 1000);
}

run();
