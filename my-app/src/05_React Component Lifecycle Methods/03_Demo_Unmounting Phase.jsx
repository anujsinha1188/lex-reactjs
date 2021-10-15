import React from 'react';
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    start = () => {
        this.setState({
        count: this.state.count + 1
        });
    }
    componentDidMount() {
        this.interval = setInterval(this.start, 2000);
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
        clearInterval(this.interval);
    }
    render() {
        return ( <React.Fragment>
                <Updates new = {this.state.count} /> 
            </React.Fragment>);
        }
    }
    class Updates extends React.Component {
        shouldComponentUpdate(newProps, newState) {
            if (this.props.new <= 3) {
                console.log('shouldComponentUpdate:', newProps);
                    return false;
                } else {
                    return true;
            }
        }
        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('Previous value destroyed:', prevProps);
            console.log('Updated');
        }
        render() {
            return ( <React.Fragment>
                        <h2> Seconds Elapsed: {this.props.new} </h2> 
                    </React.Fragment>);
                }
}
export default Timer;