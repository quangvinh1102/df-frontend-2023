import React, { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Sách Java",
      author: "Tác giả A",
      subject: "Lập trình",
    },
    {
      id: 2,
      title: "Sách HTMl",
      author: "Tác giả B",
      subject: "Lập trình",
    },
    {
      id: 3,
      title: "Sách Toán",
      author: "Tác giả C",
      subject: "Học Tập",
    },
  ]);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    subject: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const addBook = () => {
    if (newBook.title && newBook.author && newBook.subject) {
      setBooks([...books, { ...newBook, id: Date.now() }]);
      setNewBook({
        title: "",
        author: "",
        subject: "",
      });
    }
  };

  const handleSearch = () => {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="container">
      <h1>Quản lý sách</h1>
      <form action="">
        <input type="search" placeholder="Tìm kiếm theo tiêu đề" id="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </form>
      <button type="button" onClick={handleSearch}>
          Tìm kiếm
        </button>
      <table>
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Tác giả</th>
            <th>Chủ đề</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.subject}</td>
              <td>
                <button onClick={() => deleteBook(book.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="form-add-book">
        <h2>Thêm sách mới</h2>
        <input
          type="text"
          placeholder="Tiêu đề"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Tác giả"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Chủ đề"
          name="subject"
          value={newBook.subject}
          onChange={handleInputChange}
        />
        <br />
        <button onClick={addBook}>Thêm</button>
      </div>
    </div>
  );

}

export default App;
