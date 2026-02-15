const yes = document.getElementById("yes");
const no = document.getElementById("no");
const line = document.getElementById("line");

const sweetLines = [
  "YAY!! 💘 You just made my whole day.",
  "Okay now we’re officially Valentines 🥹",
  "My forever Valentine 💘",
];

let i = 0;

yes.addEventListener("click", () => {
  line.textContent = sweetLines[i % sweetLines.length];
  i++;
});

no.addEventListener("mouseenter", () => {
  // making the no button dodge the cursor
  const dx = Math.random() * 220 - 110;
  const dy = Math.random() * 160 - 80;
  no.style.transform = `translate(${dx}px, ${dy}px)`;
});

no.addEventListener("click", () => {
  line.textContent = "Nice try 😌 the answer is yes.";
});
