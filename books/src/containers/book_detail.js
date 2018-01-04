import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {


  render() {
    if (!this.props.book) {
      return <div>Select a book from the list.</div>
    }

    return (
      <div>
        <h4>Details for:</h4>
        <h2>Title: {this.props.book.title} </h2>
        <p><b>Pages: </b> {this.props.book.pages} </p>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
};

export default connect(mapStateToProps)(BookDetail);
