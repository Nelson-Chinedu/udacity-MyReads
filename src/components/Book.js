import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  onBookShelfChange = (e) => {
    this.props.onUpdate(e.target.value);
  };

  render() {
    const {
      imageLinks: { thumbnail },
      shelf,
      title,
      authors,
    } = this.props.book;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${thumbnail}")`,
              }}
            />
            <div className="book-shelf-changer">
              <select onChange={this.onBookShelfChange} value={shelf}>
                <option value="none" disabled>
                  None
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                {/* <option value="none">None</option> */}
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    );
  }
}

export default Book;
