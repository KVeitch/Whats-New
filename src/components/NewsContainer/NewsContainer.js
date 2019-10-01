import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'


const NewsContainer = (news) => {
  const newsData = news.news.map((story,i) => {
    return(
      <NewsArticle key={i} 
        headline={story.headline} 
        img={story.img} 
        url={story.url} 
        description={story.description}
      />
    )
  })
  return <div className="news-container">
    <div id='news-container--anchor' ></div>
    {newsData}
  </div>
 };

export default NewsContainer;