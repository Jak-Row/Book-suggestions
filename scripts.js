const body = document.body;
const container = document.querySelector(".book-item");
const item1 = document.createElement('section');
const item2 = document.createElement('section');
const item3 = document.createElement('section');

const book = {
    name: "The Sourcerer's Stone",
    series: "Harry Potter",
    genre: "Fantasy"
}

item1.textContent = `Title: ${book.name}`;
item2.textContent = `Series: ${book.series}`;
item3.textContent = `Genre: ${book.genre}`;

container.appendChild(item1);
container.appendChild(item2);
container.appendChild(item3);

console.log("hi");