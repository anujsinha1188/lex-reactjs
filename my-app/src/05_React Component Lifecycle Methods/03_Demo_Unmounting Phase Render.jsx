import React from 'react';
import Timer from './03_Demo_Unmounting Phase.jsx';


class RCLMUnPTimer extends React.Component {
    render() {
        return (
            <React.Fragment>
                ReactDOM.render(<Timer />, document.getElementById('root'));
            </React.Fragment>
        )
    }

}
export default RCLMUnPTimer;

/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Timer';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Timer/>, document.getElementById('root'));
setTimeout(() => {
    ReactDOM.unmountComponentAtNode( document.getElementById('root') );
   }, 15000);
serviceWorker.unregister();
*/