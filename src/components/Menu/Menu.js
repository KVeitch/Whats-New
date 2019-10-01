import React from 'react';
import './Menu.css'
import location from '../../images/location.svg'
import entertainment from '../../images/entertainment.svg'
import science from '../../images/science.svg'
import health from '../../images/health.svg'
import technology from '../../images/technology.svg'

const Menu = (data) => {
  return <div className='navbar'>
    <ul className='btns-list'>
      <li className='active-menu' id='local' onClick={e => data.changeNewsFeed(e)}>
        <img src={location} className="icon" alt='location marker'/>
        Local News
      </li>
      <li id='technology' onClick={e => data.changeNewsFeed(e)}>
        <img src={technology} className="icon" alt='location marker'/>
        Technology
      </li>
      <li id='entertainment' onClick={e => data.changeNewsFeed(e)}>
        <img src={entertainment} className="icon" alt='location marker'/>
        Entertainment
      </li>
      <li id='science' onClick={e => data.changeNewsFeed(e)}>
        <img src={science} className="icon" alt='location marker'/>
        Science
      </li>
      <li id='health' onClick={e => data.changeNewsFeed(e)}>
        <img src={health} className="icon" alt='location marker'/>
        Health
      </li>
    </ul>
  </div>
}

export default Menu;