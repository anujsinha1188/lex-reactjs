import React from 'react';
import ReactDOM from 'react-dom';
import Item from '../Item.js';
import {shallow,mount,render} from 'enzyme';

describe('quantity input', () => {
  let quantityChange;
  let wrapper;
  let input;
  beforeEach(()=>{
     quantityChange = jest.fn();
     wrapper = shallow (<Item quantityChange={quantityChange} />);
     input = wrapper.find('#quantity')
     input.simulate('change', {target: {value:3}});
  })
  
    it('should respond to the change event and change the state of Item component', () => {
      expect(wrapper.state('quant')).toEqual(3);
    });
    it('should respond to the change event and change the state of Item component', () => {
      
      // expect(quantityChange).toHaveBeenCalled()
      wrapper.instance().handleQuantityChange({target:{value:1}},2,'roopan')
      expect(quantityChange).toHaveBeenCalledWith(undefined)
      wrapper.instance().handleQuantityChange({target:{value:3}},2,'roopan')
      expect(quantityChange).toHaveBeenCalledWith('You cannot buy more than 2 roopan')
      wrapper.instance().handleQuantityChange({target:{value:2}},2,'roopan')
      expect(quantityChange).toHaveBeenCalledWith(undefined)
    });
    it('should call the parent component add method when clicked on add button',() => {
      let callbackParent = jest.fn();
      let wrapper = shallow (<Item quantityChange={quantityChange} callbackParent={callbackParent} itemid={1} price={3000} quantity={4}/>);
      let button = wrapper.find('#addButton')
      button.simulate('click')
      expect(callbackParent).toHaveBeenCalledWith(1,4,3000)
    })
  });

