import React from 'react';
import css from '../styles.module.css';

export default class Searchbar extends React.Component {
  state = {
    searchQuery: '',
  };

  handleQueryChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      return alert('Введіть ваш запит');
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="button" className={css.SearchFormButton}>
            <span className={css.SearchFormLabel}>&#128270;</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
          ></input>
        </form>
      </header>
    );
  }
}
