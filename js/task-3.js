console.log("Завдання 3");

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
	if(event.currentTarget.value === ("" || " ")) {
		nameOutput.textContent = "Anonymous";
	} else {
		  nameOutput.textContent = event.currentTarget.value.trim();
	}
});




