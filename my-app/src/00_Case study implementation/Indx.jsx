import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginForm from "./Components/LoginForm";
import PurchasedItems from "./Components/PurchasedItems";
import ProductDetails from "./Components/ProductDetails";
class RRCRPRoute extends React.Component {
    render() {
        return (<Router>
            | <Link to="/RRCRPLogin">Login</Link> |
            <React.Fragment>
                <Route path='/' component={LoginForm} exact />
                <Route path='/purchasedItems' component={PurchasedItems} />
                <Route path='/productDetails/:id' component={ProductDetails} />
            </React.Fragment>
        </Router>)
    }
}
export default RRCRPRoute;
