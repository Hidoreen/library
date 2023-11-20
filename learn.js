//Object Constructor function

const myLibrary = [
    new Book('Atomic Habits', 'James Clear', 300, 'unread'),
    new Book('The Power of Silence', 'Carlos Castaneda', 250, 'read')
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

    arr.forEach(book => {
        const library = document.querySelector('.library');
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

        bookcard.appendChild(title);
        bookcard.appendChild(authorName);
        bookcard.appendChild(pages);
        bookcard.appendChild(readStatus);
        bookcard.appendChild(removeBtn);
        
        library.appendChild(bookcard);

        const removeBtn = document.createElement('button');
        removeBtn.className = 'removeBtn';
        removeBtn.textContent = 'Remove Book';
        removeBtn.addEventListener('click', () => {
     
        myLibrary.splice(index, 1);
        
        library.removeChild(bookcard);
        });

        
    });
}

//add and print a book through dialog element
const showDialog = document.querySelector('.addbook');
const submitBtn = document.getElementById('submitBtn');
const dialogPop = document.getElementById('dialogPop');
const cancel = document.getElementById('cancelBtn');

showDialog.addEventListener('click', () => {
    dialogPop.showModal();
})

cancel.addEventListener('click', ()=>{
    dialogPop.close();
})


submitBtn.addEventListener('click', ()=> {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value);
    const readStatus = document.getElementById('readStatus').value;

    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);

    getBooks(myLibrary);

    dialogPop.close();

})
//add new book 
// function addBook(){
//     const title = prompt('Enter the title of the book:');
//     const author = prompt('Enter the author of the book:');
//     const pages = parseInt(prompt('Enter the number of pages:'));
//     const readStatus = prompt('Enter the read status of the book:');

//     const newBook = new Book(title, author, pages, readStatus);
//         myLibrary.push(newBook);

//         getBooks(myLibrary);
// }

// addBook();