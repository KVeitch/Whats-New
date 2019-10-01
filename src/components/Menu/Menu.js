import React from 'react';
import './Menu.css'

const Menu = () => {
  return <div className="navbar">
    <ul className="btns-list">
      <li>Local News</li>
      <li>Technology</li>
      <li>Entertainment</li>
      <li>Science</li>
      <li className="active-menu">Health</li>
    </ul>
  </div>
}
// MENU COMPONENT CODE GOES HERE

export default Menu;