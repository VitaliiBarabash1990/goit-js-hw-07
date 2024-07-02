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
	const boxes = [];
  for (let i = 0; i < amount; i ++) {
		const crtEl = document.createElement("div");
		crtEl.style.width = `${size}px`;
		crtEl.style.height = `${size}px`;
		crtEl.style.backgroundColor = getRandomHexColor();
		size += 10;
		boxes.push(crtEl);
	}
	box.append(...boxes);
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
	box.innerHTML = "";
}

