import React from 'react';
import './NewsArticle.css';
import rtArrow from '../../images/arrow-to-right.svg'

const NewsArticle = (story) => {
  return <article>
    <div className='image-container'>
      <img className='article-image' src={story.img} alt='Story related graphic'/>
    </div>
    <h2>{story.headline}</h2>
    <p>{story.description}</p>
    <a href={story.url} target="blank">
      <footer>Link To Article <img src={rtArrow} alt='arrow pointing to the right' /></footer>
    </a>
  </article>
 }

export default NewsArticle;

