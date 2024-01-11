//storing the books in an array
const myLibrary  = [];

//constructor 
function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
}

//create new books from book costructor based on user input
function addBookToLibrary() {
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
        return "Finished"
    }
    else return "In progress"
}

//resets the inputs in the form after adding a book
function resetForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;
}
//add book button
const addBookBtn = document.querySelector(".add-book");
addBookBtn.addEventListener('click', function() {
    addBookToLibrary();
    resetForm();
});

function displayBooks() {
    const display = document.querySelector('.book-cards');
    const books = document.querySelectorAll('.book-card');
    books.forEach(book => display.removeChild(book));

    //loop through the array and display each book on the page
    myLibrary.forEach((book, index) => {
        createBook(book, index);
    });
}
//create the elements for each book
function createBook(bookData, index) {
    const library = document.querySelector('.book-cards');
    const cardDiv = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const bookRead = document.createElement('button');
    const buttonsDiv = document.createElement('div');
    const bookDelete = document.createElement('button');

    cardDiv.classList.add("book-card");
    cardDiv.setAttribute('data-index', index)
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

    cardDiv.appendChild(buttonsDiv);

    bookRead.classList.add("read");
    bookRead.textContent = bookData.read;
    buttonsDiv.appendChild(bookRead);

    //changing read status
    bookRead.addEventListener('click', () => {
        bookData.read = bookData.read === "Finished" ? "In progress" : "Finished";
        bookRead.textContent = bookData.read;
        myLibrary[index].read = bookData.read;
    });

    bookDelete.classList.add("book-delete");
    bookDelete.textContent = "Delete";
    buttonsDiv.appendChild(bookDelete);

    //giving each book an index
    const books = document.querySelectorAll('.book-card');
    books.forEach((book, index) => {
        book.setAttribute('data-index', index);
    });

    //delete button
    bookDelete.addEventListener('click', () => {
        const dataIndex = parseInt(cardDiv.getAttribute('data-index'));
        myLibrary.splice(dataIndex, 1);
        displayBooks();
    });

    
    
}






    





