import React from 'react';
import './Menu.css'

const Menu = (props) => {
  console.log(props)
  return <div className='navbar'>
    <ul className='btns-list'>
      <li className='active-menu' id='local' onClick='changeNewsFeed'>Local News</li>
      <li id='technology'>Technology</li>
      <li id='entertainment'>Entertainment</li>
      <li id='science'>Science</li>
      <li id='health'>Health</li>
    </ul>
  </div>
}

export default Menu;