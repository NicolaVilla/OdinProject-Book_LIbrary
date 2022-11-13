myLibrary = [];

function Book(bookData = []){
    this.title = bookData[0];
    this.author = bookData[1];
    this.pages = bookData[2];
    this.isRead = bookData[3];

    

}

function addBookToLibrary(book = []){


    myLibrary.push(new Book(book))

}


console.log(myLibrary)

addBookToLibrary(["The Hobbit" , "J.R.R. Tolkien", 295 , true])
console.log(myLibrary)