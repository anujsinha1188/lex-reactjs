
import React from 'react';
import Timer from './04_Demo_Error Handling.jsx';
import ErrorHandler from './04_Demo_Error Handler.jsx';


class RCLMEHTimer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ErrorHandler>
                    <Timer />
                </ErrorHandler>
            </React.Fragment>
        )
    }

}
export default RCLMEHTimer;