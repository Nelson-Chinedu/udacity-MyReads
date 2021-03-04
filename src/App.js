import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';

import BookshelfCategory from './components/BookShelfCategory';
import SearchBook from './components/SearchBook';
import './App.css'


class BooksApp extends React.Component {
  state = {
    books: [],
    loading: true
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books,
          loading: false,
        }))
      })
  }


  onChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(
        this.setState((state) => ({
          books: state.books.map(b => {
              if (b.title === book.title) {
                  b.shelf = shelf;
                  return b
              } else {
                  return b
              }
          }),
          loading: false
      }))
      )
  };
  render() {
    const { books, loading } = this.state;

    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
    const read = books.filter((book) => book.shelf === 'read');
    
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
          { loading ? (
            <div className="loading">
              <img src="/loader.gif" alt="loader" />
              <p>Loading...</p>
            </div>
          ) : (
            <BookshelfCategory 
              currentlyReading={currentlyReading}
              wantToRead={wantToRead}
              read={read}
              onChangeShelf={this.onChangeShelf}
              showSearchPage={this.state.showSearchPage}
            />
          )}
          </div>
          )} 
        />
        <Route path="/search" render={({history}) => (
          <SearchBook
            history={history} 
            onChangeShelf={this.onChangeShelf}
            books={currentlyReading.concat(wantToRead, read)}
          /> 
        )} 
        />
      </div>
    )
  }
}

export default BooksApp
