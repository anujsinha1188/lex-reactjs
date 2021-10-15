import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RRCRPLogin from './03_Login.jsx';
import RRCRPHome from './03_Home.jsx';
class RRCRPRoute extends React.Component {
    render() {
        return (<Router>
            | <Link to="/RRCRPLogin">Login</Link> |
            <React.Fragment>
                <Route exact path="/RRCRPLogin" component={RRCRPLogin} />
                <Route path="/RRCRPhome" component={RRCRPHome} />
            </React.Fragment>
        </Router>)
    }
}
export default RRCRPRoute;
