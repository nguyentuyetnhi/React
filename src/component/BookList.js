import React from 'react';
import Book from './Book';

function BookList({ data }) {
  return (
    <div className="container-fluid" style={{backgroundColor:'gray'}}>
    <div className="row">
    <div className="col-12">

      {data.map((book) => (
        
        <Book  key={book.id} title={book.title} amount={book.amount} date={book.date} />
        
      ))}
    </div>
    </div>
    </div>
  );
}

export default BookList;
