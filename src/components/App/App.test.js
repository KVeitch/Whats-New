import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

//data import for testing
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local'
import science from '../../data/science';
import technology from '../../data/technology';

describe('App', () => {
  let event = { target: { name: 'health', value: 'g' } };
  const mockSearchReturn = [{
    id: 1,
    headline: 'The Who postpones Denver Concert at the Pepsi Center',
    img: 'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
    description: 'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.',
    url: 'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
  }];

  let wrapper;
  beforeEach(() => {
    wrapper= shallow(<App 
    
    />)
  })
  describe('default data sets', () => {
    it('should have a local property', () => {
      expect(wrapper.instance().local).toEqual(local)
    });

    it('should have a health property', () => {
      expect(wrapper.instance().health).toEqual(health)
    });

    it('should have a science property', () => {
      expect(wrapper.instance().science).toEqual(science)
    });

    it('should have a entertainment property', () => {
      expect(wrapper.instance().entertainment).toEqual(entertainment)
    });

    it('should have a technology property', () => {
      expect(wrapper.instance().technology).toEqual(technology)
    });

    it('shoul start with current propert matching local property', () => {
      expect(wrapper.state('current')).toEqual(local)
    });

  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  // it('should change state when', () => {
  //   let event = {
  //     target:{
  //             dataset:{
  //                       link:'local'
  //                     }
  //                 }
  //         }
  //   expect(wrapper.state('current')).toEqual(local)
  //   wrapper.instance().changeNewsFeed(event);
  //   expect(wrapper.state('current')).toEqual(health)
  // });

  it('should return searched articles', () => {
    expect(wrapper.state().current).toEqual(local)
    console.log('Before: ', wrapper.state().current)
    wrapper.instance().searchNews('pepsi');
    console.log('After: ', wrapper.state().current)
    expect(wrapper.state().current).toEqual(mockSearchReturn);
  });
})
