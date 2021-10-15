import React from 'react';
class AppACNRender extends React.Component {
    render() {
        return (<React.Fragment><AppACN element2="React" /></React.Fragment>);
    }
}
export default AppACNRender;


class AppACN extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1> {this.props.element1} </h1>
                <h1> {this.props.element2} </h1>
            </React.Fragment>);
    }
}
AppACN.defaultProps = {
    element1: "Hello",
    element2: "World",
}