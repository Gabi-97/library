//create an array of books
//the books are to be created with the create object function
//add to the library function adds the created book to the array

//storing the books in an array
const myLibrary  = [];

//constructor 
function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
}

function addBookToLibrary() {
    //create new books from book costructor based on user input
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = haveRead();

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
    
}
function haveRead() {
    if(document.getElementById('read').checked == true) {
        return "Yes"
    }
    else return "No"
}

const addBookBtn = document.querySelector(".add-book");
addBookBtn.addEventListener('click', addBookToLibrary);


function displayBooks() {
    const display = document.querySelector('.book-cards');
    const books = document.querySelectorAll('.book-card');
    books.forEach(book => display.removeChild(book));

//loop through the array and display each book on the page
    myLibrary.forEach(book => {
        createBook(book);
    });
}
//create the elements to visually show the books
function createBook(bookData) {
    const library = document.querySelector(".book-cards");
    const cardDiv = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const bookRead = document.createElement('p');

    cardDiv.classList.add("book-card");
    library.appendChild(cardDiv);

    bookTitle.classList.add("book-title");
    bookTitle.textContent = bookData.title;
    cardDiv.appendChild(bookTitle);

    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = bookData.author;
    cardDiv.appendChild(bookAuthor);

    bookPages.classList.add("book-pages");
    bookPages.textContent = bookData.pages;
    cardDiv.appendChild(bookPages);

    bookRead.classList.add("read");
    bookRead.textContent = bookData.read;
    cardDiv.appendChild(bookRead);
}


