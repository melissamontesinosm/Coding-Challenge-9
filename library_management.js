
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


