const books = [
    {
        id: 1,
        title: "Sách Java",
        author: "Tác giả A",
        subject: "Lập trình",
    },
    {
        id: 2,
        title: "Sách Toán",
        author: "Tác giả B",
        subject: "Học Tập",
    },
    {
        id: 3,
        title: "Sách Lập Trình Python",
        author: "Tác giả C",
        subject: "Lập trình",
    },
]

const bookListDiv = document.getElementById("list-books");
const valueTitle = document.getElementById("title");
const valueAuthor = document.getElementById("author");
const valueSubject = document.getElementById("subject");
const searchInput = document.getElementById("search-input");

function displayBook(booksToDisplay) {
    bookListDiv.innerHTML = "";

    for (let i = 0; i < booksToDisplay.length; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${booksToDisplay[i].title}</td>
            <td>${booksToDisplay[i].author}</td>
            <td>${booksToDisplay[i].subject}</td>
            <td><button onclick="deleteBook(${booksToDisplay[i].id})">Xóa</button></td>
        `;
        bookListDiv.appendChild(row);
    }
}

function deleteBook(id) {
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        displayBook(books);
    }
}

function addBook() {
    const newBook = {
        id: Date.now(),
        title: valueTitle.value,
        author: valueAuthor.value,
        subject: valueSubject.value,
    }
    books.push(newBook);
    displayBook(books);

    valueTitle.value = "";
    valueAuthor.value = "";
    valueSubject.value = "";
}

function searchBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
    displayBook(filteredBooks);
}

searchInput.addEventListener("input", searchBooks);

displayBook(books);
