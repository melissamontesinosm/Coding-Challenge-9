
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

    listBooks() { // List all books in the section with title and availability
        return this.books.map(book => `${book.title} - ${book.isAvailable} ? 'Available' : 'Borrowed'}`).join('\n'); // Using a ternary operator to identify availability
    };

  // Task 5: Handle Books Borrowing and Returning
    calculateTotalBooksAvailable() {
        return this.books.reduce((total, book) => total + (book.isAvailable ? 1 : 0), 0); // Using a function and ternary operator to calculate total number of books
    };
};


// Task 3: Create a Patron Class

class Patron { // Define a class
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    };

    borrowBook(book) { // To allow the patron to borrow a book if available and update book’s status.
        if (book.isAvailable) { // If statement to display message
            book.isAvailable = false; 
            this.borrowedBooks.push(book); // Push borrowed book 
            console.log(`${this.name} borrowed ${book.title}`); // Display message
        } else {
            console.log(`${book.title} is not available currently.`); // If else display message
        };
    };

    returnBook(book) { // To allow the patron to return a borrowed book, making it available again.
        const index = this.borrowedBooks.indexOf(book);
        if(index !== -1) {
            book.isAvailable = true; 
            this.borrowedBooks.splice(index,1);
            console.log(`${this.name} returned "${book.title}"`); // Display Message
        } else {
            console.log(`${this.name} does not have "${book.title}" borrowed.`); // If else display message
        };
    };
};


// Task 4: Create a VIPPatron Class that Inherits from Patron

class VIPPatron extends Patron { // Define a class inherited from class
    constructor(name, priority) {
        super(name);
        this.priority = true; // Boolean
    }

    borrowBook(book) { // To prioritize borrowing in case of competition with regular patrons
        if(this.priority) {
            console.log(`${this.name} (VIP) has priority to borrow "${book.title}"`); // Display message
        }
        super.borrowBook(book); // To call the bowworBook method from the Patron class
    };
};


// Task 6: Create and Manage Sections and Patrons

//Create Sections
const romance = new Section("Romance"); 
const self = new Section("Self-help");

//Create Books
const book1 = new Book("The Courage to be Disliked", "Ichiro Kishimi", "0501331722");
const book2 = new Book( "Atomic Habits", "James Clear", "1722108824");
const book3 = new Book("How to Win Friends and Influence People", "Dale Carnegie", "05555555555");
const book4 = new Book("Everything I Know About Love", "Dolly Alderton", "0123456789");

//Add books to sections
self.addBook(book1);
self.addBook(book2);
self.addBook(book3);
romance.addBook(book4);

//Create Patrons
const regularPatron = new Patron ("Marissa Cooper"); 
const vipPatron = new VIPPatron("Summer Robe", true);

//Regular patron tries to borrow a book
regularPatron.borrowBook(book1);

//VIP Patron tries to borrow a book
vipPatron.borrowBook(book1);

//Return the book
regularPatron.returnBook(book1);

//List books and availability 
console.log(fiction.listBooks());

//Used to calculate and display total available books in each section 
console.log(`Total available books in Romance: ${romance.calculateTotalBooksAvailable()}`);
console.log(`Total available books in Self-help: ${self.calculateTotalBooksAvailable()}`);


