
// Task 1: Create a Book Class

class Book { //Define a Class
    constructor(title, author, ISBN) { // Included Parameters
        this.title = title;
        this.author = author; 
        this.ISBN = ISBN;
        this._isAvailable = true; //Boolean
    };

    getDetails() { // Display Book Information
        return `Title: ${this.name}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    };

    get isAvailable() { // Using a getter to identify if book is available
        return `${this._isAvailable}`;
    };

    set isAvailable(status) { // Using a setter to update a book's the availability status
        this._isAvailable = status;
    }
};


// Task 2: Create a Section Class

class Section { // Define a class
    constructor(name) { // Included Parameters
        this.name = name;
        this.books = [];
    };

    addBook(book) { // Add a book in books array
        if (book instanceof Book){ 
            this.books.push(book);
        }
        else{
            console.log("Error"); // No action = Error
    };
    };
     
    getAvailableBooks() { // Return total number of available books 
        return this.books.filter(book => book.isAvailable).length;
    };

    listBooks() {
        return this.books.map(book => `${book.title} - ${book.isAvailable} ? 'Available' : 'Borrowed'}`).join('\n');
    }
}


