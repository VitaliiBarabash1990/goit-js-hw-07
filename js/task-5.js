function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const clickMe = document.querySelector(".change-color");
const body = document.querySelector("body");
const bgColor = document.querySelector(".color");

clickMe.addEventListener("click", handleClickColor);

function handleClickColor() {
  body.style.backgroundColor = getRandomHexColor();
	bgColor.textContent = `- ${body.style.backgroundColor}`;
	console.log(body.style.backgroundColor);
	console.log(bgColor.textContent);
}
