import React, { useState } from 'react';
import Book from './Book';

function BookList() {
  const [books, setBooks] = useState([]);

  const addBookToList = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <h1>Book List</h1>
      {books.length > 0 ? (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <Book name={book.title} gpa={book.amount} dob={book.date} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
}

export default BookList;
