import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={ () => this.props.selectBook(book) }
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  };

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
        
      </ul>
    );
  };
};

function mapStateToProps(state) {
  //Whatever is returned here will show up as props inside of BooksList
  return {
    books: state.books
  };
};

// Anything returned from this function will end up as props on the BooksList container.
function mapDispatchToProps( dispatch ) {
  // Whenever selectBook is calles, the result should be passed to all our reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// PRomote BookList from a component to a container - it seeds to know about this new dispatch method selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
