import React from 'react';

class TimerFunctionalComponent extends React.Component {
    constructor(props) {
    super(props);
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
        return (<React.Fragment>
                <button onClick = {this.handleClick}> 
                    Start Timer 
                </button> 
                <Resultant new = {this.state.secondsElapsed}/> 
            </React.Fragment>);
    }
}

function Resultant(data) {
            return ( <h2> 
                Seconds Elapsed: {data.new} 
            </h2>
        )
}

export default TimerFunctionalComponent;
