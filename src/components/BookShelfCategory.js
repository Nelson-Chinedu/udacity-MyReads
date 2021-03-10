import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

class BookShelfCategory extends Component {
  static propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
  };

  render() {
    const { books, onChangeShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              bookShelfTitle="Currently Reading"
              books={books.filter((book) => book.shelf === "currentlyReading")}
              onChangeShelf={onChangeShelf}
            />
            <BookShelf
              bookShelfTitle="Want To Read"
              books={books.filter((book) => book.shelf === "wantToRead")}
              onChangeShelf={onChangeShelf}
            />
            <BookShelf
              bookShelfTitle="Read"
              books={books.filter((book) => book.shelf === "read")}
              onChangeShelf={onChangeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookShelfCategory;
