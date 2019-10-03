import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';


describe ('SearchForm', () => {
  let wrapper;
  const mockSearchNews = jest.fn()

  beforeEach(()=> {
    wrapper = shallow(<SearchForm searchNews={mockSearchNews}/>)
  });

  it('should match snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  });
  
  describe( 'handleChange', () =>{
    it('should update state when handleChange is called', ()=>{
      let mockEvent = {
                target:{
                        value:'g'
                      }
              };
      wrapper.find('[name="search"]').simulate('onChange')
      wrapper.instance().handleChange(mockEvent)

      expect(wrapper.state().search).toEqual('g')
    });
  });

  it('Should call searchNews and clear state when the button is clicked', () => {
    let mockEvent = {
              target:{
                      value:'g'
                    }
            };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state().search).toEqual('g')

    wrapper.find('.search__btn').simulate('click')
    expect(wrapper.instance().props.searchNews).toHaveBeenCalled()
    expect(wrapper.state().search).toEqual('')
  });

});