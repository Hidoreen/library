//Object Constructor function

const myLibrary = [
    new Book('Atomic Habits', 'James Clear', 300, 'unread'),
];

function Book (title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.bookInfo = function (){
        return (`The ${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}.`);
    }
}


//loop through the book array and display books
function getBooks(arr){
    const library = document.querySelector('.library');
    library.innerHTML = '';

    arr.forEach(book => {
       
        const bookcard = document.createElement('div');
        bookcard.className = 'bookCard';

        const title = document.createElement('h3');
        title.textContent = book.title;

        const authorName = document.createElement('p');
        authorName.textContent = ` Author: ${book.author}`;

        const pages = document.createElement('p');
        pages.textContent = ` Pages: ${book.pages}`;

        const readStatus = document.createElement('p');
        readStatus.textContent = ` readStatus: ${book.readStatus}`;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'removeBtn';
        removeBtn.textContent = 'Remove Book';
        removeBtn.addEventListener('click', () => {
        library.removeChild(bookcard);

        });


        bookcard.appendChild(title);
        bookcard.appendChild(authorName);
        bookcard.appendChild(pages);
        bookcard.appendChild(readStatus);
        bookcard.appendChild(removeBtn);
        
        library.appendChild(bookcard);
        
    });
}

getBooks(myLibrary);

//add and print a book through dialog element
const showDialog = document.querySelector('.addbookBtn');
const formBook = document.getElementById('formBook');
const dialogPop = document.getElementById('dialogPop');
const cancel = document.getElementById('cancelBtn');

showDialog.addEventListener('click', () => {
    dialogPop.showModal();
})

cancel.addEventListener('click', ()=>{
    dialogPop.close();
})


formBook.addEventListener('submit', (event)=> {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value);
    const readStatus = document.getElementById('readStatus').value;

    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);

    getBooks(myLibrary);

    dialogPop.close();

})