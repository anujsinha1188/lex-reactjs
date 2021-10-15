
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class RFD1Login extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form>
                    <div className="form-group">
                        <label for="name">Username:</label>
                        <input style={{ width: '40%' }} type="text" className="form-control" id="name" placeholder="Enter Name" name="name" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input style={{ width: '40%' }} type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </React.Fragment>)
    }
}
export default RFD1Login;