import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RRRPLogin from './02_Login.jsx';
import RRRPHome from './02_Home.jsx';
class RRRPRoute extends React.Component {
    render() {
        return (<Router>
            | <Link to="/RRRPLogin">Login</Link> |
            <React.Fragment>
                <Route exact path="/RRRPLogin" component={RRRPLogin} />
                <Route path="/RRRPhome/:name" component={RRRPHome} />
            </React.Fragment>
        </Router>)
    }
}
export default RRRPRoute;
