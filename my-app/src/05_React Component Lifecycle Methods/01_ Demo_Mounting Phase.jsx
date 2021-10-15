import React from 'react';

class RCLMMPTimer extends React.Component {
    constructor() {
        super();
        this.state = {
            secondsElapsed: 0
        };
    }
    start = () => {
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    }
    componentDidMount() {
        this.interval = setInterval(this.start, 1000);
    }
    render() {
        return (<React.Fragment>
            <h2> Seconds Elapsed: {this.state.secondsElapsed} </h2>
        </React.Fragment>);
    }
}

export default RCLMMPTimer;
