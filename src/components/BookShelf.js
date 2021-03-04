import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './Book';


class BookShelf extends Component {

  static propTypes = {
    bookShelfTitle: PropTypes.string.isRequired,
    bookList: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  render(){
    const { bookShelfTitle, bookList, onChangeShelf } = this.props;
    
    return (
      <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookShelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookList.map((book, index) => {
              return (
                <li key={index}>
                  <Book book={book} onChangeShelf={onChangeShelf} />
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
    )
  }
}


export default BookShelf;