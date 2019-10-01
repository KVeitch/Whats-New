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

  render () {
    return (
      <div className="app">
        <SearchForm />
        <Menu changeNewsFeed={this.changeNewsFeed} />
        <NewsContainer news={this.state.current} />
      </div>
    );
  }
  changeNewsFeed = (event) => {
    this.setState({current: this.state[event.target.id]});
  }
}

export default App;
