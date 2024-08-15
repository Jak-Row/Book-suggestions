// Base Library array
const library = [{
    image: "https://m.media-amazon.com/images/I/91NjWLufnNL._SY342_.jpg",
    title: "Harry Potter and The Sourcerer's Stone",
    series: "Harry Potter",
    genre: "Fantasy",
    book: 1
},
{
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9SarI05alr1Ejq3_ux7s5naSm5awx6Tu8IwFYIgIu1IcNCnK-",
    title: "Harry Potter and The Chamber of Secrets",
    series: "Harry Potter",
    genre: "Fantasy",
    book: 2 
},
{
    image: "https://m.media-amazon.com/images/I/812CcFkEPCL._SY466_.jpg",
    title: "Harry Potter and The Prisoner of Azkaban",
    series: "Harry Potter",
    genre: "Fantasy",
    book: 3 
},
{
    image: "https://m.media-amazon.com/images/I/91SI2owt1XL._SY342_.jpg",
    title: "Harry Potter and The Goblet of Fire",
    series: "Harry Potter",
    genre: "Fantasy",
    book: 4 
},
{
    image: "https://m.media-amazon.com/images/I/91TzeItvNFL._SY342_.jpg",
    title: "Harry Potter and The Order of the Phoenix",
    series: "Harry Potter",
    genre: "Fantasy",
    book: 5 
},
{
    image: "https://m.media-amazon.com/images/I/91g0m3EGvpL._SY342_.jpg",
    title: "Harry Potter and the Half-Blood Prince",
    series: "Harry Potter",
    genre: "Fantasy",
    book: 6 
},
{
    image: "https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SY679_.jpg",
    title: "Harry Potter and the Deathly Hallows",
    series: "Harry Potter",
    genre: "Fantasy",
    book: 7 
},
{
    image: "https://m.media-amazon.com/images/I/81L6YpcUoZL._SY466_.jpg",
    title: "Steelheart",
    series: "Reckoners",
    genre: "Sci-Fi",
    book: 8 
},
{
    image: "https://m.media-amazon.com/images/I/51MTNFeoHdL._SY445_SX342_.jpg",
    title: "Firefight",
    series: "Reckoners",
    genre: "Sci-Fi",
    book: 9 
},
{
    image: "https://m.media-amazon.com/images/I/51P-Tx0626L._SY445_SX342_.jpg",
    title: "Calamity",
    series: "Reckoners",
    genre: "Sci-Fi",
    book: 10 
},
{
    image: "https://m.media-amazon.com/images/I/71JNgcyHqML._SY466_.jpg",
    title: "Women",
    series: "None",
    genre: "Fiction",
    book: 11
},
{
    image: "https://m.media-amazon.com/images/I/41BiT3sOQBL._SY445_SX342_.jpg",
    title: "The Great Gatsby",
    series: "None",
    genre: "Fiction",
    book: 12
},
{
    image: "https://m.media-amazon.com/images/I/61rYS7JQMPL._SL1200_.jpg",
    title: "On The Road",
    series: "None",
    genre: "Fiction",
    book: 13
},
{
    image: "https://m.media-amazon.com/images/I/51ZplLxPmZL._SY445_SX342_.jpg",
    title: "Volume 1: Inferno",
    series: "The Devine Comedy",
    genre: "Fiction",
    book: 14
},
{
    image: "https://m.media-amazon.com/images/I/510JpWTRCKL._SY445_SX342_.jpg",
    title: "Volume 2: Purgatory",
    series: "The Devine Comedy",
    genre: "Fiction",
    book: 15
},
{
    image: "https://m.media-amazon.com/images/I/4173+NEFwWL._SY445_SX342_.jpg",
    title: "Into The Wild",
    series: "None",
    genre: "Non-Fiction",
    book: 16
},
{
    image: "https://m.media-amazon.com/images/I/41BHgzbKbqL._SY445_SX342_.jpg",
    title: "The Pianist",
    series: "None",
    genre: "Autobiography",
    book: 17
},
{
    image: "https://m.media-amazon.com/images/I/41O8FJfHwHL._SY445_SX342_.jpg",
    title: "A Room of One's Own",
    series: "None",
    genre: "Fiction",
    book: 18
},
{
    image: "https://m.media-amazon.com/images/I/91+vj2qNsdL._AC_UY218_.jpg",
    title: "The Complete Tales and Poems of Edgar Allan Poe",
    series: "None",
    genre: "Poetry",
    book: 19
},
{
    image: "https://m.media-amazon.com/images/I/31imE8tU6AL._SY445_SX342_.jpg",
    title: "The Jungle",
    series: "None",
    genre: "Fiction",
    book: 20
},
];


//element callers
const addBook = document.querySelector('#newBook');
const subBook = document.querySelector('#removeBook');


//Functions
function searchForBook() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.querySelector('.book-list');
    li = ul.getElementsByClassName("book-item");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("h2")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}


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

const removeBook = function(num) {
    library.splice(num - 1, 1);

    for(i = 0; i < library.length; i++) {
        library[i].book = i + 1;
    }
}

const displayBooks = function() {

    for(i = 0; i < library.length; i++) {
        const list = document.querySelector('.book-list')
        const container = document.createElement('section');
        container.className = "book-item";
        container.setAttribute("id", `book${i}`);
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

        list.appendChild(container);
        container.appendChild(item0);
        container.appendChild(item1);
        container.appendChild(item2);
        container.appendChild(item3);
        container.appendChild(item4);
    }
    
}


const redisplayBooks = function(oldLength) {
    for(i = 0; i < oldLength; i++) {
        const child = document.getElementById(`book${i}`);
        child.remove();
    }

    displayBooks();
}


displayBooks();


//  Event Listeners
addBook.addEventListener('click', function () {
    const titleEl = document.getElementById("title").value;
    const seriesEl = document.getElementById("series").value;
    const genreEl = document.getElementById("genre").value;
    const imageEl = document.getElementById("image").value;

    addNewBook(imageEl, titleEl, seriesEl, genreEl);

    console.log(library);

    redisplayBooks(library.length - 1);
})

subBook.addEventListener('click', function () {
    const bookNum = document.getElementById("remove").value;

    removeBook(bookNum);

    console.log(library);

    redisplayBooks(library.length + 1);
})