import React from 'react';
class RRRPDisplay extends React.Component {
    render() {
        return <React.Fragment>
            <h2>Inside {this.props.match.params.topic} component</h2>
        </React.Fragment>
    }
};
export default RRRPDisplay;
