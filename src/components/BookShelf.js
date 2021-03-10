import React, { Component } from "react";
import PropTypes from "prop-types";

import Book from "./Book";

class BookShelf extends Component {
  static propTypes = {
    bookShelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  };

  updateBook = (book, shelf) => {
    this.props.onChangeShelf(book, shelf);
  };

  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.bookShelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map((book, index) => (
                <Book
                  book={book}
                  key={index}
                  onUpdate={(shelf) => {
                    this.updateBook(book, shelf);
                  }}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelf;
