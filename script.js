const box = document.getElementById("box");
const layers = document.querySelectorAll(".layer");
const centerMsg = document.getElementById("centerMsg");
const centerText = document.getElementById("centerText");
const pigs = document.querySelectorAll(".pig");
const cakeArea = document.getElementById("cakeArea");
const bgMusic = document.getElementById("bgMusic");

const messages = [
  "🎉First surprise!",
  "💖keep smiling always",
  "✨enjoy life",
  "🎂 Happy Birthday raji❤️"
];

let step = 0;
let musicStarted = false;

box.addEventListener("click", () => {

  if (!musicStarted) {
    bgMusic.volume = 0.4;
    bgMusic.play().catch(()=>{});
    musicStarted = true;
  }

  if (step >= layers.length) return;

  layers[step].classList.add("open");
  centerText.innerText = messages[step];
  centerMsg.classList.add("show");

  releaseButterflies();

  if (step === 3) {
    pigs.forEach(p => p.style.display = "block");
    cakeArea.style.display = "flex";
  }

  step++;
});

function releaseButterflies() {
  for (let i = 0; i < 16; i++) {
    const b = document.createElement("img");
    b.src = "butterflies.jpeg";
    b.className = "butterfly";

    const angle = Math.random() * Math.PI * 2;
    const distance = 350 + Math.random() * 250;

    b.style.left = "50%";
    b.style.top = "50%";
    b.style.setProperty("--x", Math.cos(angle) * distance + "px");
    b.style.setProperty("--y", Math.sin(angle) * distance + "px");

    document.body.appendChild(b);
    setTimeout(() => b.remove(), 6000);
  }
}
function openFlap() {
  const flap = document.getElementById("flap");
  const chocolate = document.getElementById("chocolate");

  flap.style.transform = "rotateX(120deg)";

  // Show chocolate AFTER flap opens
  setTimeout(() => {
     chocolate.classList.add("show");
  }, 2200); // match flap opening time
}