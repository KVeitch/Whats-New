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
      <li className='active-menu' data-link='local' onClick={e => data.changeNewsFeed(e)}>
        <img data-link='local' src={location} className="icon" alt='line art of a location marker'/>
        Local News
      </li>
      <li data-link='technology' onClick={e => data.changeNewsFeed(e)}>
        <img data-link='technology' src={technology} className="icon" alt='lightbulb with gears'/>
        Technology
      </li>
      <li data-link='entertainment' onClick={e => data.changeNewsFeed(e)}>
        <img data-link='entertainment'src={entertainment} className="icon" alt='two tickes to a show'/>
        Entertainment
      </li>
      <li data-link='science' onClick={e => data.changeNewsFeed(e)}>
        <img data-link='science' src={science} className="icon" alt='zooming rocketship'/>
        Science
      </li>
      <li data-link='health' onClick={e => data.changeNewsFeed(e)}>
        <img data-link='health' src={health} className="icon" alt='heart with E. K. G. lines'/>
        Health
      </li>
    </ul>
  </div>
}

export default Menu;