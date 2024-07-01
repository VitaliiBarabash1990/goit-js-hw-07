console.log("Завдання 4");

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
	const nameEmail = form.elements.email.name;
	const namePassword = form.elements.password.name;
  
  if (email === "" || password === "") {
		return alert("All form fields must be filled in");
  } else {
		console.log(`{${nameEmail}: ${email.trim()}, ${namePassword}: ${password.trim()}}`);
	}
	form.reset();
}
