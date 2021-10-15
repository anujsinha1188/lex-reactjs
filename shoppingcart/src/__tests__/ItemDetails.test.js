import React from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-fetch'
import Item from '../Item.js';
import ItemDetails from '../ItemDetails.js';
import { shallow,mount,render } from 'enzyme';

jest.mock('../Item')

describe('Testing ItemDetails component',()=>{
    describe('testing the fetch API call with mock response',()=>{
        let body;
        let init;
        let wrapper;
        beforeEach( done =>{
             body = [{
                "itemId": "1",
                "itemName": "Chocalates",
                "ItemImg": "/Images/chocalates.png",
                "itemPrice": "100",
                "itemQuantity": "1",
                "MaxQuantity": "10"
            }]
            init = {
                status: 200
            }
            window.fetch = jest.fn().mockImplementation(() => Promise.resolve(new Response (JSON.stringify(body), init)));
            wrapper =  mount( < ItemDetails/> );
            done();
        })
        it('testing fetch API call for success',async ()=>{
            expect(wrapper.state('itemDetails')).toEqual([{
                "itemId": "1",
                "itemName": "Chocalates",
                "ItemImg": "/Images/chocalates.png",
                "itemPrice": "100",
                "itemQuantity": "1",
                "MaxQuantity": "10"
            }])
        })
    })
    describe('testing for fetch failure', ()=>{
        let wrapper;
        beforeEach( done =>{
           window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok:false}));
           wrapper =  mount( < ItemDetails/> );
           done();
       })
        it('testing for fetch failure',async ()=>{
            expect(wrapper.state('error')).toBeDefined()
        })
    })
    describe('Testing whether Item child component is rendered',()=>{
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({}))        
        it("Item child component is rendered",()=>{
            let wrapper = mount(<ItemDetails/>)
            wrapper.setState({itemDetails:[{
                "itemId":"1",
                "itemName":"Chocalates",
                "ItemImg":"/Images/chocalates.png",
                "itemPrice":"100",
                "itemQuantity":"1",
                "MaxQuantity":"10"
            }]})
            let childContainer = wrapper.find("Item")
            expect(childContainer).toHaveLength(1)
        })
        it('Whether props are passed to item component properly',()=>{
            let wrapper= shallow(<ItemDetails/>)
            wrapper.setState({itemDetails:[{
                "itemId":"1",
                "itemName":"Chocalates",
                "ItemImg":"/Images/chocalates.png",
                "itemPrice":"100",
                "itemQuantity":"1",
                "MaxQuantity":"10"
            }]})
            let childContainer = wrapper.find('Item')
            let childContainerProps = childContainer.props()
            let childProps = {
                "itemid":"1",
                "name":"Chocalates",
                "img":"/Images/chocalates.png",
                "price":"100",
                "quantity":"1",
                "maxquantity":"10",
                "callbackParent": (id, quant, price) => wrapper.onChildChanged(id, quant, price),
                "quantityChange": (message) => wrapper.onQuanityChange(message)
            }
            expect(JSON.stringify(childContainerProps)).toEqual(JSON.stringify(childProps))
        })
        it('Whether the last 2 props passed to item component are functions',()=>{
        let wrapper= shallow(<ItemDetails/>)
         wrapper.setState({itemDetails:[{
            "itemId":"1",
            "itemName":"Chocalates",
            "ItemImg":"/Images/chocalates.png",
            "itemPrice":"100",
            "itemQuantity":"1",
            "MaxQuantity":"10"
        }]})
         let childContainer = wrapper.find('Item')
         let childContainerProps = childContainer.props()
         expect(typeof childContainerProps.callbackParent).toBe("function")
         expect(typeof childContainerProps.quantityChange).toBe("function")
        })
    })
    describe('testing the recharge functionality', ()=>{
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({}))
        it('testing whether handle recharge method is called',async ()=>{
            let wrapper = mount (<ItemDetails />);
            let instance = wrapper.instance()
            instance.handleRecharge = jest.fn();
            await wrapper.find('#recharge').simulate('click')
            expect(instance.handleRecharge).toHaveBeenCalled()
           
        })
        it('should set errorMessage for invalid recharge amount',() => {
            let wrapper = mount (<ItemDetails />);
            wrapper.instance().handleRecharge(0)
            expect(wrapper.state('errorMessage')).toEqual('Please enter valid amount to recharge');
        })
        it('testing whether reset error message is called after 5 seconds when invalid amount is entered for recharging',() => {
            jest.useFakeTimers()
            let wrapper = mount (<ItemDetails />);
            let instance = wrapper.instance()
            instance.resetErrorMessage=jest.fn()
            instance.handleRecharge(0)           
            expect(instance.resetErrorMessage).not.toBeCalled()
            jest.advanceTimersByTime(5000)
            expect(instance.resetErrorMessage).toHaveBeenCalled();
        })
        it('testing whether reset error message method has cleared the error message',async () => {
            let wrapper = mount (<ItemDetails />);
            let instance = wrapper.instance()
            await instance.resetErrorMessage()
            expect(wrapper.state('errorMessage')).toBe("")
        })
        it('should recharge the wallet with the amount entered',() => {
            let wrapper = mount (<ItemDetails />);
            wrapper.instance().handleRecharge(5)
            expect(wrapper.state('wallet')).toEqual(5);
        })
        it('should set success message after adding recharge amount to the wallet',() => {
            let wrapper = mount (<ItemDetails />);
            wrapper.instance().handleRecharge(5)
            expect(wrapper.state('errorMessage')).toEqual('Rs.5 added to the wallet');
        })
        it('testing whether reset error message is called after 5 seconds when valid amount is entered for recharging',() => {
            jest.useFakeTimers()
            let wrapper = mount (<ItemDetails />);
            let instance = wrapper.instance()
            instance.resetErrorMessage=jest.fn()
            instance.handleRecharge(500)           
            expect(instance.resetErrorMessage).not.toBeCalled()
            jest.advanceTimersByTime(5000)
            expect(instance.resetErrorMessage).toHaveBeenCalled();
        })
    })
    describe('testing place order functionality',() =>{
        it('testing erroMessags is set when no items are added to the cart',()=>{
            let wrapper = mount (<ItemDetails />);
            wrapper.instance().placeOrder()
            expect(wrapper.state('errorMessage')).toEqual('Please add items to cart')
            })
        it('testing whether reset error message is called after 5 seconds when no items are added to the cart',() => {
                jest.useFakeTimers()
                let wrapper = mount (<ItemDetails />);
                let instance = wrapper.instance()
                instance.resetErrorMessage=jest.fn()
                instance.placeOrder()           
                expect(instance.resetErrorMessage).not.toBeCalled()
                jest.advanceTimersByTime(5000)
                expect(instance.resetErrorMessage).toHaveBeenCalled();
        })
        it('testing whether reset error message method has cleared the error message',async () => {
            let wrapper = mount (<ItemDetails />);
            let instance = wrapper.instance()
            await instance.resetErrorMessage()
            expect(wrapper.state('errorMessage')).toBe("")
        })
        it('testing whether reset values method is called after 5 seconds when order has been placed successfully',() => {
            jest.useFakeTimers()
            let wrapper = mount (<ItemDetails />);
            let instance = wrapper.instance()
            wrapper.setState({quantityArr: [{
                "itemId":"1",
                "itemName":"Chocalates",
                "ItemImg":"/Images/chocalates.png",
                "itemPrice":"100",
                "itemQuantity":"1",
                "MaxQuantity":"10"
            }],wallet:5,totalPrice:3})
            instance.resetValues=jest.fn()
            instance.placeOrder()           
            expect(instance.resetValues).not.toBeCalled()
            jest.advanceTimersByTime(5000)
            expect(instance.resetValues).toHaveBeenCalled();
        })
        it('testing whether reset values method has cleared the values',async () => {
            let wrapper = mount (<ItemDetails />);
            let instance = wrapper.instance()
            let emptyArray = []
            await instance.resetValues()
            expect(wrapper.state('errorMessage')).toBe("")
            expect(wrapper.state('quantityArr')).toEqual(emptyArray)
            expect(wrapper.state('totalPrice')).toEqual(0)
        })
        it('testing erroMessags is set for insufficient balance',()=>{
            let wrapper = mount (<ItemDetails />);
            wrapper.setState({quantityArr: [{
                "itemId":"1",
                "itemName":"Chocalates",
                "ItemImg":"/Images/chocalates.png",
                "itemPrice":"100",
                "itemQuantity":"1",
                "MaxQuantity":"10"
            }],wallet:2,totalPrice:3})
            wrapper.instance().placeOrder()
            expect(wrapper.state('errorMessage')).toEqual('You do not have sufficient balance to place the order. Please recharge your account')
        })
        it('testing erroMessags is set when balance is zero',()=>{
            let wrapper = mount (<ItemDetails />);
            wrapper.setState({quantityArr: [{
                "itemId":"1",
                "itemName":"Chocalates",
                "ItemImg":"/Images/chocalates.png",
                "itemPrice":"100",
                "itemQuantity":"1",
                "MaxQuantity":"10"
            }],wallet:0,totalPrice:3})
            wrapper.instance().placeOrder()
            expect(wrapper.state('errorMessage')).toEqual('You do not have sufficient balance to place the order. Please recharge your account')
        })
        it('testing success message is set for successfully placing the order',()=>{
            let wrapper = mount (<ItemDetails />);
            wrapper.setState({quantityArr: [{
                "itemId":"1",
                "itemName":"Chocalates",
                "ItemImg":"/Images/chocalates.png",
                "itemPrice":"100",
                "itemQuantity":"1",
                "MaxQuantity":"10"
            }],wallet:5,totalPrice:3})
            wrapper.instance().placeOrder()
            expect(wrapper.state('errorMessage')).toEqual('Your order placed successfully')
            expect(wrapper.state('wallet')).toEqual(5-3)
        })
        it('testing success message is set for successfully placing the order',()=>{
            let wrapper = mount (<ItemDetails />);
            wrapper.setState({quantityArr: [{
                "itemId":"1",
                "itemName":"Chocalates",
                "ItemImg":"/Images/chocalates.png",
                "itemPrice":"100",
                "itemQuantity":"1",
                "MaxQuantity":"10"
            }],wallet:5,totalPrice:5})
            wrapper.instance().placeOrder()
            expect(wrapper.state('errorMessage')).toEqual('Your order placed successfully')
            expect(wrapper.state('wallet')).toEqual(5-5)
        })
    })
    describe('testing quantity change functionality',()=>{
        
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({}))
        it('testing whether the error message sent form the child component is set',()=>{
            let wrapper = mount (<ItemDetails />);
            wrapper.instance().onQuanityChange('message')
            expect(wrapper.state('errorMessage')).toEqual('message')
        })
        it('testing whether the reset method is called', ()=>{
            jest.useFakeTimers()
            let wrapper = mount (<ItemDetails />);
            let instance = wrapper.instance()
            instance.resetErrorMessage=jest.fn()
            instance.onQuanityChange('message')
            expect(instance.resetErrorMessage).not.toBeCalled()
            jest.advanceTimersByTime(5000)
            expect(instance.resetErrorMessage).toHaveBeenCalled();
        })
    })
    describe('testing the add to cart functionality',()=>{
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({}))
        it('testing whether the quantity is getting updated to the item which is already present in cart', async ()=>{
            let wrapper = mount (<ItemDetails />);
            let instance = wrapper.instance()
            wrapper.setState({quantityArr:[{'1':3}]})
            await instance.onChildChanged(1,5,100)
            expect(wrapper.state('quantityArr')).toEqual([{'1':5}])
        })
        it('testing whether the total price is populated when quantity fo the exisiting item is updated',async ()=>{
            let wrapper = mount (<ItemDetails />);
            let instance = wrapper.instance()
            wrapper.setState({quantityArr:[{'1':3}],totalPrice:300})
            await instance.onChildChanged(1,5,100)
            expect(wrapper.state('totalPrice')).toEqual(500)
        })
        it('testing whether the the new item is added to cart', async ()=>{
            let wrapper = mount (<ItemDetails />);
            let instance = wrapper.instance()            
            wrapper.setState({quantityArr:[{'1':3}]})
            await instance.onChildChanged(2,10,100)
            expect(wrapper.state('quantityArr')).toEqual([{'1':3},{'2':10}])
        })
        it('testing whether the total price is updated properly when a new item is added to the cart',async ()=>{
            let wrapper = mount (<ItemDetails />);
            let instance = wrapper.instance()
            wrapper.setState({quantityArr:[{'1':3}],totalPrice:300})
            await instance.onChildChanged(2,10,100)
            let totalPrice = 300 + (10*100)
            expect(wrapper.state('totalPrice')).toEqual(totalPrice)
        }) 
    })
})