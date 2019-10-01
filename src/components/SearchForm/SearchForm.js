import React, { Component } from 'react'
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      search:''
    }
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]:e.target.value});
    console.log(this.state.search)
  }

  handleSubmit = (e) => {
    // const searchText = this.state.search;
    // this.props.searchNews(searchText, e);
    this.setState({ search:'' });
    console.log(this.state.search)
  }

  render() {
    return <header className='header'>
      <h1 className='app-name'>What's <span className='yellow'>News?</span></h1>
      <input 
        type= 'text'
        name= 'search'
        value= {this.state.search}
        onChange= {this.handleChange}
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