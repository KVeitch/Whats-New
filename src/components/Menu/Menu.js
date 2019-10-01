import React from 'react';
import './Menu.css'

const Menu = (data) => {
  return <div className='navbar'>
    <ul className='btns-list'>
      <li className='active-menu' id='local' onClick={e => data.changeNewsFeed(e)}>Local News</li>
      <li id='technology' onClick={e => data.changeNewsFeed(e)}>Technology</li>
      <li id='entertainment' onClick={e => data.changeNewsFeed(e)}>Entertainment</li>
      <li id='science' onClick={e => data.changeNewsFeed(e)}>Science</li>
      <li id='health' onClick={e => data.changeNewsFeed(e)}>Health</li>
    </ul>
  </div>
}

export default Menu;