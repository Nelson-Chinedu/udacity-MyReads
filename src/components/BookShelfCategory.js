import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';


class BookShelfCategory extends Component {
  
  static propTypes = {
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired,
    showSearchPage: PropTypes.bool
  }

  render(){
    const { currentlyReading, wantToRead, read, onChangeShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf 
              bookShelfTitle="Currently Reading"
              bookList={currentlyReading}
              onChangeShelf={onChangeShelf}
            />
            <BookShelf 
              bookShelfTitle="Want To Read"
              bookList={wantToRead}
              onChangeShelf={onChangeShelf}
            />
            <BookShelf 
              bookShelfTitle="Read"
              bookList={read} 
              onChangeShelf={onChangeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}


export default BookShelfCategory;
