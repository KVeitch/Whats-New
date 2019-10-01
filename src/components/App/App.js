import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import tech from '../../data/technology';
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
      tech,
      science
    }
    this.state.current = local
  }

  render () {
    return (
      <div className="app">
        <SearchForm />
        <Menu changeNewsFeeds={this.changeNewsFeeds}/>
        <NewsContainer news={this.state.current} />
      </div>
    );
  }
  changeNewsFeeds(e){
    this.state.current.setState(this.state[e.target.id]);
  }
}

export default App;
