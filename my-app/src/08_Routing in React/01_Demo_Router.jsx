import React from 'react';
import RRRHome from './01_Home.jsx';
import RRRAbout from './01_About.jsx';
import RRRContactUs from './01_Contact.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class RRRHeader extends React.Component {
    render() {
        return (<Router>
            <React.Fragment>
                <Link to="/RRRhome">Home</Link> |
                        <Link to="/RRRabout"> About Us </Link> |
                        <Link to="/RRRcontact"> Contact Us </Link>
                <Route exact path="/" component={RRRHome} />
                <Route path="/RRRhome" component={RRRHome} />
                <Route path="/RRRabout" component={RRRAbout} />
                <Route path="/RRRcontact" component={RRRContactUs} />
            </React.Fragment>
        </Router>)
    }
}
export default RRRHeader;
