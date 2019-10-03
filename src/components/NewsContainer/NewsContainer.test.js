import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';


describe('NewsContainer', () =>{
  it('should match the snapshot', () => {
    const newsStorys = [
      {
      headline:'Big News Here',
      description:'News Descriptiopn here',
      url:'http://www.moretesting.com'
      },
      {
        headline:'More News Here',
        description:'Even More Description here',
        url:'http://www.evenmoretesting.com'
        }
    ]
    const wrapper = shallow(<NewsContainer
      news={newsStorys}
    />);

    expect(wrapper).toMatchSnapshot()
  });

})