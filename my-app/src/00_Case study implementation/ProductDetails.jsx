import React from 'react';
import Product from './Product.jsx';
import FeedbackComp from './FeedbackComp.jsx';
import axios from 'axios';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackData: [{
                pdtCode: '1',
                user: 'khalid',
                feedbackDetails: 'Worst product. First of all    received very late. Forget about it.',
                rating: '2',
                updatedAt: ''
            }],
            productDetails: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/products').then(response => {
            this.setState({ productDetails: response.data })
        }).catch(error =>
            this.setState({
                error
            })
        );
    }
    render() {
        return (<div>
            {this.state.productDetails.map(function (productDetail) {
                return <Product
                    pid={productDetail._id}
                    price={productDetail.pdtPrice}
                    name={productDetail.pdtName}
                    key={productDetail._id}
                    desc={productDetail.pdtDescription}
                    img={productDetail.img}
                    rating={productDetail.avgFeedback}
                    status={productDetail.isDiscontinued} />
            })}
            <FeedbackComp feedbacks={this.state.feedbackData} />
        </div>)
    }
}

export default ProductDetails;
