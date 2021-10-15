import React from 'react';
var count = 1;
class AppAccessChildNode extends React.Component {
        render() {
                React.Children.map(this.props.children, () => {
                        console.log('child', count++);
                });
                return (
                        <ol>
                                {this.props.children}
                        </ol>)
        }
};
export default AppAccessChildNode;