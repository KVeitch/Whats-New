import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import health from '../../data/health'
import technology from '../../data/technology';
import './App.css';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      technology,
      science,
      health
    }
    this.state.current = local
  }

  
  changeNewsFeed = (event) => {
    event.preventDefault();
    window.location.href = '#news-container--anchor';
    this.setState({current: this.state[event.target.dataset.link]});
    document.querySelectorAll('.btn').forEach(btn => btn.className = 'btn')
    event.target.closest('li').className += ' active-menu'
  }
  
  searchNews = (searchText, event) => {
    event.preventDefault();
    let allNews = [...this.state.local, ...this.state.entertainment, 
      ...this.state.technology, ...this.state.science, ...this.state.health];
    let searchResults = allNews
    .filter(story => story.headline.toLowerCase().includes(searchText) 
      || story.description.toLowerCase().includes(searchText));
    this.setState({current:searchResults});
  }

  render () {
    return (
      <div className="app">
        <SearchForm
          searchNews={this.searchNews}
        />
        <Menu 
          changeNewsFeed={this.changeNewsFeed}
        />
        <NewsContainer news={this.state.current} />
      </div>
    );
  }
}

export default App;
