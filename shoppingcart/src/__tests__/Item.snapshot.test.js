import Item from '../Item.js';
import renderer from 'react-test-renderer';
import React from 'react';

test('Item component renders the props correctly', () => {
  const itemDetail = {
    "itemId":"1",
    "itemName":"Chocalates",
    "ItemImg":"/Images/chocalates.png",
    "itemPrice":"100",
    "itemQuantity":"1",
    "MaxQuantity":"10"
}
const myFun1 = jest.fn()
const myFun2 = jest.fn()
  const rendered = renderer.create(
    <Item  itemid={itemDetail.itemId}
    name={itemDetail.itemName}
    img={itemDetail.ItemImg}
    price={itemDetail.itemPrice}
    quantity={itemDetail.itemQuantity}
    maxquantity={itemDetail.MaxQuantity}
    callbackParent={(id, quant, price) => myFun1(id, quant, price)}
    quantityChange={(message) => myFun2(message)} />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});