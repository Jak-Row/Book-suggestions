const library = [{
    image: "https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg",
    title: "The Sourcerer's Stone",
    series: "Harry Potter",
    genre: "Fantasy",
    book: 1
},
{
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9SarI05alr1Ejq3_ux7s5naSm5awx6Tu8IwFYIgIu1IcNCnK-",
    title: "The Sourcerer's Stone",
    series: "Harry Potter",
    genre: "Fantasy",
    book: 2 
}];
const addBook = document.querySelector('#newBook');
const titleEl = document.getElementById("title");
const seriesEl = document.getElementById("series");
const genreEl = document.getElementById("genre");

const addNewBook = function(image, title, series, genre) {
    const newBook = {
        image: image,
        title: title,
        series: series,
        genre: genre,
        book: (library.length + 1)
    }

    library.push(newBook)
}


const displayBooks = function() {

    for(i = 0; i < library.length; i++) {
        const container = document.querySelector(".book-item");
        const item0 = document.createElement('img');
        const item1 = document.createElement('h2');
        const item2 = document.createElement('h2');
        const item3 = document.createElement('section');
        const item4 = document.createElement('section');

        item0.src = `${library[i].image}`;
        item1.textContent = `Title: ${library[i].title}`;
        item2.textContent = `Series: ${library[i].series}`;
        item3.textContent = `Genre: ${library[i].genre}`;
        item4.textContent = `Book Number: ${library[i].book}`;

        container.appendChild(item0);
        container.appendChild(item1);
        container.appendChild(item2);
        container.appendChild(item3);
        container.appendChild(item4);
    }
    
}

displayBooks();

addBook.addEventListener('click', function () {
    const titleEl = document.getElementById("title").value;
    const seriesEl = document.getElementById("series").value;
    const genreEl = document.getElementById("genre").value;
    const imageEl = document.getElementById("image").value;

    addNewBook(imageEl, titleEl, seriesEl, genreEl);

    console.log(library);
})