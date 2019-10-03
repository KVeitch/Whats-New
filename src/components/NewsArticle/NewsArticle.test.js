import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';


describe('NewsArticle', () =>{
  it('should match the snapshot', () => {
    const newsStory = {
      headline:'Big News Here',
      description:'News Descriptiopn here',
      url:'http://www.moretesting.com'
    }
    const wrapper = shallow(<NewsArticle
      story={newsStory}
    />);

    expect(wrapper).toMatchSnapshot()
  });

})