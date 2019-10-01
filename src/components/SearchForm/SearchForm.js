import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return <header className="header">
    <h1 className="app-name">What's <span className="yellow">News?</span></h1>
    <input className="search__input" placeholder="Search for news articles here..."></input>
    <div className="search__btn">Search Now</div>
  </header>
 }

export default SearchForm;