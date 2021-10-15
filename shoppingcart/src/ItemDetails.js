import React, { Component } from 'react';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';
const API = '/products.json';
class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.placeOrder = this.placeOrder.bind(this)
        this.resetErrorMessage = this.resetErrorMessage.bind(this)
        this.fetchData = this.fetchData.bind(this);
        this.state = {
            itemDetails: [],
            error: null,
            quantityArr: [],
            wallet: 0,
            totalPrice: 0,
            errorMessage: ""
        };

    }
    fetchData() {
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {
                this.setState({ itemDetails: data })
            })
            .catch(error => {
                this.setState({ error })
            });
    }
    componentDidMount() {
        this.fetchData()
    }
    resetErrorMessage() {
        this.setState({ errorMessage: "" })
    }
    resetValues() {
        this.setState({ errorMessage: "", quantityArr: [], totalPrice: 0 })
    }

    handleRecharge(recharge) {
        if (recharge == "" || recharge == 0) {
            this.setState({
                errorMessage: "Please enter valid amount to recharge"
            })
            setTimeout(() => { this.resetErrorMessage() }, 5000);
        } else {
            var wallet = recharge
            this.setState({
                wallet: recharge
            })
            this.setState({
                errorMessage: "Rs." + wallet + " " + "added to the wallet"
            })
            setTimeout(() => { this.resetErrorMessage() }, 5000);
        }
    }
    placeOrder() {
        if (this.state.quantityArr.length == 0) {
            this.setState({
                errorMessage: "Please add items to cart"
            })
            setTimeout(() => { this.resetErrorMessage() }, 5000);
        }

        else if ((this.state.wallet < this.state.totalPrice) || (this.state.wallet == 0)) {
            this.setState({ errorMessage: "You do not have sufficient balance to place the order. Please recharge your account" })
            setTimeout(() => { this.resetErrorMessage() }, 10000);
        }
        else if (this.state.wallet >= this.state.totalPrice) {
            var balance = this.state.wallet - this.state.totalPrice
            this.setState({ errorMessage: "Your order placed successfully", wallet: balance })
            setTimeout(() => { this.resetValues() }, 5000)
        }
    }
    onChildChanged(id, newQuantity, rprice) {
        var index = this.state.quantityArr.findIndex(el => el[id] != undefined)

        if (index > -1) {
            this.state.totalPrice += (-this.state.quantityArr[index][id] * rprice) + (newQuantity * rprice)
            this.state.quantityArr[index][id] = newQuantity
        } else {
            var obj = {}
            obj[id] = newQuantity
            this.state.quantityArr.push(obj)
            this.state.totalPrice += (newQuantity * rprice)
        }
        this.setState({
            quantityArr: this.state.quantityArr,
            totalPrice: this.state.totalPrice
        })
    }
    onQuanityChange(message) {
        this.setState({ errorMessage: message })
        setTimeout(() => { this.resetErrorMessage() }, 5000)
    }
    render() {
        var items = this.state.itemDetails
        return (
            <div className="container"><br />
                <div id="heading">Shop Grocery Items</div><br /><br /><br />
                <div className="alignRight"> My Basket: {this.state.quantityArr.length} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;My Wallet: Rs. {this.state.wallet} </div><br /><br />
                <div className="textAlign"> Recharge Wallet: &nbsp;&nbsp;&nbsp;&nbsp;<input type="text"
                    ref="recharge" />&nbsp;&nbsp;
            <button onClick={() => this.handleRecharge(this.refs.recharge.value)} type="button" id="recharge" className="btn btn-primary"> Recharge </button></div><br /><br />
                <span id="error">{this.state.errorMessage}</span><br />
                <div className={this.state.totalPrice ? 'alignTableRight' : 'alignTableRight hidden'}> Total Price: {this.state.totalPrice}</div> <br /><br />
                <table className="custom-table table table-responsive">
                    <thead className="header">
                        <tr>
                            <th>Item Details</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{this.state.itemDetails.map(itemDetail =>
                        <Item key={itemDetail.itemId}
                            itemid={itemDetail.itemId}
                            name={itemDetail.itemName}
                            img={itemDetail.ItemImg}
                            price={itemDetail.itemPrice}
                            quantity={itemDetail.itemQuantity}
                            maxquantity={itemDetail.MaxQuantity}
                            callbackParent={(id, quant, price) => this.onChildChanged(id, quant, price)}
                            quantityChange={(message) => this.onQuanityChange(message)} />)}
                    </tbody>
                </table >
                <button className="marginLeft btn btn-primary" type="button" onClick={this.placeOrder}>Place Order</button></div>
        )
    }
}
export default ItemDetails;
