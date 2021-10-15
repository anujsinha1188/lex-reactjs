import React from 'react';
import UI from './../images/UI.png';
class RRCRPHome extends React.Component {
    render() {
        return (
            <React.Fragment><br /><br />
                <img src={UI} alt="UI" /><br /><br />
                <h4> Just Launched...</h4><br />
                <li>Angular</li>
                <li>React</li>
                <li>Express</li>
                <li>Vue</li>
            </React.Fragment>
        )
    }
}
export default RRCRPHome;
