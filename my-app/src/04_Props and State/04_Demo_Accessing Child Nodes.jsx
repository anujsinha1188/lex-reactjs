import React from 'react';
//import ReactDOM from 'react-dom';
import './../index.css';
import AppAccessChildNode from './04_Child Node Access';

class AccessChildNode extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AppAccessChildNode>
                    <li>List element</li>
                    <h3>Heading element</h3>
                    <p>Paragraph element</p>
                    <span>Span element</span>
                </AppAccessChildNode>
            </React.Fragment>
        )
    }
}

export default AccessChildNode;