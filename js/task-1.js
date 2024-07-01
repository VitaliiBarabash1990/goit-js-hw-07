console.log("Завдання 1");

const numOfCategories = categories.querySelectorAll(".item");
console.table(`Number of categories: ${numOfCategories.length}`);

numOfCategories.forEach((category) => {
const categoryTitle = category.querySelector("h2").textContent;
const catElements = category.querySelectorAll("li").length;
console.log(`Category: ${categoryTitle}`);
console.log(`Elements: ${catElements}`);
});