import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";

import BookshelfCategory from "./components/BookShelfCategory";
import SearchBook from "./components/SearchBook";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
    loading: true,
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
        loading: false,
      }));
    });
  }

  onChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState(() => ({
          books,
        }));
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div>
              {this.state.loading ? (
                <div className="loading">
                  <img src="/loader.gif" alt="loader" />
                  <p>Loading...</p>
                </div>
              ) : (
                <BookshelfCategory
                  onChangeShelf={this.onChangeShelf}
                  books={this.state.books}
                />
              )}
            </div>
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchBook
              history={history}
              onChangeShelf={this.onChangeShelf}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
