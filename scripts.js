const library = [{
    title: "The Sourcerer's Stone",
    series: "Harry Potter",
    genre: "Fantasy"
}];
const addBook = document.querySelector('#newBook');
const titleEl = document.getElementById("title");
const seriesEl = document.getElementById("series");
const genreEl = document.getElementById("genre");

const addNewBook = function(title, series, genre) {
    const newBook = {
        title: title,
        series: series,
        genre: genre
    }

    library.push(newBook)
}


const desplayBook = function() {

    for(i = 0; i < library.length; i++) {
        const container = document.querySelector(".book-item");
        const item1 = document.createElement('h2');
        const item2 = document.createElement('p');
        const item3 = document.createElement('section');

        item1.textContent = `Title: ${library[i].title}`;
        item2.textContent = `Series: ${library[i].series}`;
        item3.textContent = `Genre: ${library[i].genre}`;

        container.appendChild(item1);
        container.appendChild(item2);
        container.appendChild(item3);
    }
    
}

desplayBook();

addBook.addEventListener('click', function () {
    const titleEl = document.getElementById("title").value;
    const seriesEl = document.getElementById("series").value;
    const genreEl = document.getElementById("genre").value;

    addNewBook(titleEl, seriesEl, genreEl);

    console.log(library);
})