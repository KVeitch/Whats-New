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


export default class App extends Component {
  constructor() {
    super();
    this.local = local
    this.entertainment = entertainment
    this.technology = technology
    this.health = health
    this.science = science
    this.state = {
      current:local
    }
  }

  changeNewsFeed = (event) => {
    this.setState({current: this[event.target.dataset.link]});
    event.target.closest('li').parentNode.childNodes
      .forEach(child => child.classList.remove('active-menu'));
    event.target.closest('li').classList.add('active-menu');
    window.location.href = '#news-container--anchor';
  }
  
  searchNews = (searchText) => {
    let searchResults = this.state.current
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
