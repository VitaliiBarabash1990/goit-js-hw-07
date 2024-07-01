function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("input");
const box = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");


createBtn.addEventListener("click", handleCreate);

function handleCreate(event) {
  event.preventDefault();
	const amount = parseInt(inputNumber.value);
	if (amount >=1 && amount <=100) {
		createBoxes(amount);
		inputNumber.value = "";
	}
}

function createBoxes(amount) {
	destroyBoxes();
	let size = 30;
  for (let i = 0; i < amount; i ++) {
	size += 10;
	let color = getRandomHexColor();
	const markup = `<div style = "width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
	console.log(markup);
	box.insertAdjacentHTML("beforeend", markup);
}
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
	box.innerHTML = "";
	console.log(box);
}

