/*import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Switch, Redirect } from "react-router-dom";
import { data } from "../shared/bookdata";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import Book from "./BookComponent";
import InputBook from "./BookFormComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: data,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      selectedDish: null,
    };
  }

  addBookToList = (newBook) => {
    // Add the new book to the list
    this.setState((prevState) => ({
      books: [...prevState.books, newBook],
    }));
  };

  render() {
    const HomePage = () => {
      return (
        <div>
          <InputBook addBookToList={this.addBookToList} />
          <Book books={this.state.books} />
        </div>
      );
    };

    return (
      <div>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
*/import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import { data } from '../shared/bookdata';

function Main() {
  const [books, setBooks] = useState(data);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div>
    
      <BookForm onAddBook={addBook} />
     
      <BookList data={books} />
    </div>
  );
}

export default Main;
