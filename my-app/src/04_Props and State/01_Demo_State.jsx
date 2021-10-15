import React from 'react';

class TimerState extends React.Component {
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
    handleClick = (e) => {
        this.interval = setInterval(this.start, 1000);
    }
    render() {
        return (<React.Fragment><br /><br />
            <button onClick={this.handleClick}>Start timer</button><br /><br />
            <h2> Seconds Elapsed:
                    {this.state.secondsElapsed}
            </h2>
        </React.Fragment>);
    }
}

export default TimerState;