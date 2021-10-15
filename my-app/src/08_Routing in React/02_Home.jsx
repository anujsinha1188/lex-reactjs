import React from 'react';
import UI from './../images/UI.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RRRPDisplay from './02_Display.jsx';
class RRRPHome extends React.Component {
    render() {
        return <Router>
            <React.Fragment>
                <h4>Welcome&nbsp;{this.props.match.params.name} to UI courses</h4>
                <img src={UI} alt="UI" /><br /><br />
                <h4> Just Launched...</h4>
                <Link to="/RRRPdisplay/Angular">
                    <li>Angular</li>
                </Link>
                <Link to="/RRRPdisplay/React">
                    <li>React</li>
                </Link>
                <Link to="/RRRPdisplay/Express">
                    <li>Express</li>
                </Link>
                <Link to="/RRRPdisplay/Vue">
                    <li>Vue</li>
                </Link>
                <Route path="/RRRPdisplay/:topic"
                    component={RRRPDisplay} />
            </React.Fragment>
        </Router>
    }
}
export default RRRPHome;
