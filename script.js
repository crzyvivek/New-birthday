// Shayari lines
const shayariLines = [
  "Zindagi ke is khaas din par, khud ko salam hai!",
  "Aaj meri muskurahat sabse khaas hai, kyunki mera birthday hai.",
  "Khushiyan ho anek, har pal mein rahe ek nayi baat!"
];

const container = document.querySelector(".shayari-box");
shayariLines.forEach((line, index) => {
  const div = document.createElement("div");
  div.className = "shayari-line";
  div.textContent = line;
  container.appendChild(div);
});

const lines = document.querySelectorAll(".shayari-line");
lines.forEach((line, index) => {
  setTimeout(() => {
    line.style.opacity = "1";
  }, index * 4000); // 4s delay
});

// Auto-play music after slight delay
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bgMusic");
  audio.muted = false;
  setTimeout(() => {
    audio.play().catch(() => console.warn("Interaction required"));
  }, 1000);
});
