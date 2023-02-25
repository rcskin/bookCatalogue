//Compulary Task 1

let books = [];//Create an empty array that we will use to store all the books objects created.

function refreshBookList() {
    let bookListElement = document.getElementById("bookList");
    //clear inner HTML 
    bookListElement.innerHTML = '';

    //if/else to determine if books information is in catalogue:
    if (sessionStorage.getItem("books") === null) {
        //what is this part for????
        sessionStorage.setItem("books", JSON.stringify(books));
        
    } else {
        books = JSON.parse(sessionStorage.getItem("books"));//Get the array of books objects from sessionStorage and assign it to the array 'books'
        books.forEach((books, index) => {
            bookListElement.innerHTML +=
            `<p>Title: ${books.title}</p>
            <p>Author: ${books.author.first} ${books.author.last}</p>
            <p>Genre: ${books.genre}</p>
            <p>Rating: ${books.rating}</p>
            <button onclick = 'editBook(${index})'>Edit Book</button>
            <button onclick ='removeBook(${index})'>Remove Book</button>`;
        }); //needed to concatenate the first and last names to stop it showing as an object on web page
        }
    }

//create the constructor function that will be used to create all book objects
function Book(title, first, last, genre, rating) {
    this.title = title;
    this.author = {
        first: first,
        last: last
    };
    this.genre = genre;
    this.rating = rating;
}

function addBook() {
    
    books = JSON.parse(sessionStorage.getItem("books")); //why this??
    
    //add the values written as new object
    const newBook = new Book(
        document.getElementById("title").value,
        document.getElementById("first").value,
        document.getElementById("last").value,
        document.getElementById("genre").value,
        document.getElementById("rating").value
    );
    //push new object into the array
    books.push(newBook);
    sessionStorage.setItem("books", JSON.stringify(books));
    //call refreshBookList function to refresh the bookList div
    refreshBookList();
    //clear the text boxes after book is added
    document.getElementById("title").value = "";
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("rating").value = "";
};

//create a function to edit a book entry
function editBook(index) {
    books = JSON.parse(sessionStorage.getItem("books")); //why this??
   
    // Update the properties of the book object 
    let title = prompt("Enter the new title:", books[index].title);
    let first = prompt("Enter the new author's first name:", books[index].author.first);
    let last = prompt("Enter the new author's last name:", books[index].author.last);
    let genre = prompt("Enter the new genre:", books[index].genre);
    let rating = prompt("Enter the new rating:", books[index].rating);

    //Update the values with the new variables given
    books[index].title = title;
    books[index].author.first = first;
    books[index].author.last = last;
    books[index].genre = genre;
    books[index].rating = rating;

    // Update the books array in session storage
    sessionStorage.setItem("books", JSON.stringify(books));
    refreshBookList();
};

//Create function to remove a book
function removeBook(index) {   
    //use splice to remove the object at the index and only 1 instance
    books.splice(index, 1);
    //update books array in session storage
    sessionStorage.setItem("books", JSON.stringify(books));
    //call refreshBookList function to refresh bookList div
    refreshBookList();
}




