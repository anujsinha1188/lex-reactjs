import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Item extends React.Component {
    constructor({ quantity }) {
        super()
        this.state = {
            itemids: [],
            quant: quantity,
            errorMessage: "",
            name: ""
        }
    }
    handleQuantityChange(event, maxquantity, name) {
        const newQuantity = event.target.value
        if (newQuantity > parseInt(maxquantity)) {
            var message = "You cannot buy more than " + maxquantity + " " + name
            this.setState({ errorMessage: "You cannot buy more than " + maxquantity + " " + name })
        }
        this.setState({ quant: newQuantity })
        this.props.quantityChange(message)
    }

    addItem(id, price) {
        const newQuantity = this.state.quant
        this.props.callbackParent(id, newQuantity, price)
    }

    render() {
        var id = this.props.itemid
        var maxquantity = this.props.maxquantity
        return (
            <React.Fragment>
                <h1>Item Component</h1>
                <tr>
                    <td style={{ width: "30%" }}>
                        <div className="inline-block">{this.props.name}</div>
                        <div className="inline-block spacing">
                            <img width="100px" height="100px" src={this.props.img} />
                        </div>
                    </td>
                    <td style={{ width: "10%" }}>
                        <div class="align-center">{this.props.price}</div>
                    </td>
                    <td style={{ width: "10%" }}>
                        <div className="align-center"><input className="input-width" id="quantity" type="number" value={this.state.quant} onChange={(e) => this.handleQuantityChange(e, maxquantity, this.props.name)} /></div>
                    </td>
                    <td style={{ width: "10%" }}>
                        <div className="align-center">
                            <button className="btn btn-info" id="addButton" type="button" onClick={() => this.addItem(id, this.props.price)}>Add</button>
                        </div>
                    </td>
                </tr>
            </React.Fragment>
        )
    }
}
export default Item;
