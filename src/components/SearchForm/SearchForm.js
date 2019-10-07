import React, { Component } from 'react'
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      search:''
    }
  }
  handleChange = (event) => {
    this.setState({search:event.target.value});
  }

  handleSubmit = () => {
    const searchText = this.state.search.toLowerCase();
    this.props.searchNews(searchText);
    this.setState({ search:'' });
  }

  handleEnterKey = (event) => {
    if (event.keyCode === 13) {
      this.handleSubmit()
    }
  }

  render() {
    return <header className='header'>
      <h1 className='app-name'>What's <span className='yellow'>News</span>?</h1>
      <input 
        type= 'text'
        name= 'search'
        value= {this.state.search}
        onChange= {this.handleChange}
        onKeyDown= {this.handleEnterKey}
        className='search__input' 
        placeholder='Search for news articles here...'
      />
      <div 
      className='search__btn'
      onClick= {this.handleSubmit}
      >
        Search Now</div>
    </header>
  }
 }

export default SearchForm;