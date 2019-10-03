import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {

  it('should select local news feeds when local clicked', ()=> {
    const mockChangeNewsFeed = jest.fn();
    const wrapper = shallow(<Menu changeNewsFeed={mockChangeNewsFeed} />)
    
    wrapper.find('li[data-link="local"]').simulate('click')
    expect(mockChangeNewsFeed).toHaveBeenCalled()
  });

  it('should select entertainment news feeds when entertainment clicked', ()=> {
    const mockChangeNewsFeed = jest.fn();
    const wrapper = shallow(<Menu changeNewsFeed={mockChangeNewsFeed} />)
    
    wrapper.find('li[data-link="entertainment"]').simulate('click')
    expect(mockChangeNewsFeed).toHaveBeenCalled()
  });

  it('should select technology news feeds when technology clicked', ()=> {
    const mockChangeNewsFeed = jest.fn();
    const wrapper = shallow(<Menu changeNewsFeed={mockChangeNewsFeed} />)
    
    wrapper.find('li[data-link="technology"]').simulate('click')
    expect(mockChangeNewsFeed).toHaveBeenCalled()
  });

  it('should select health news feeds when health clicked', ()=> {
    const mockChangeNewsFeed = jest.fn();
    const wrapper = shallow(<Menu changeNewsFeed={mockChangeNewsFeed} />)
    
    wrapper.find('li[data-link="health"]').simulate('click')
    expect(mockChangeNewsFeed).toHaveBeenCalled()
  });

  it('should select science news feeds when science clicked', ()=> {
    const mockChangeNewsFeed = jest.fn();
    const wrapper = shallow(<Menu changeNewsFeed={mockChangeNewsFeed} />)
    
    wrapper.find('li[data-link="science"]').simulate('click')
    expect(mockChangeNewsFeed).toHaveBeenCalled()
  });

})