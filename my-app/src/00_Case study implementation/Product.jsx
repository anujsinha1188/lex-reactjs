import React from 'react';
import Rater from './Rater.jsx';
import './../css/style.css';

class Product extends React.Component {
    constructor(props){
        super(props);
      }
    render() {
        return (
            <div>
                <div className={"thumbnail"}>
                    <img src={this.props.img} alt="product" className={"img img-rounded img-responsive"} />
                    <div className={"caption"} style={{ 'textAlign': 'center' }}>
                        <a href={'/productDetails'}><h3> {this.props.name} </h3></a>
                        <h4><span style={{ 'color': 'red' }}> Rs.{this.props.price} </span></h4>
                        {this.props.status ? <h5 style={{ "color": "red", "font-weight": "bold" }}>The product is discontinued.</h5> : <p className={"description"}>{this.props.desc}</p>}
                        <Rater value={this.props.rating} maxlength="6" />&nbsp;&nbsp;
                        <span style={{ "fontSize": "9px" }}>{this.props.rating}/5</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product;
