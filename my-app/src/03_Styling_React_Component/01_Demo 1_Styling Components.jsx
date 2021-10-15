import React from 'react';
import './01_Demo 1.css';

class SCFrmCSS extends React.Component {
        render() {
                return (<React.Fragment>
                        <h1 style={{ color: 'green', fontFamily: 'verdana' }}>Welcome to React</h1>
                        <button className="button">Submit</button>
                </React.Fragment>)
        }
}

export default SCFrmCSS;