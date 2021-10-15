import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class RFD2Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', password: '' }
    }
    setEmpState = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        this.setState({ [field]: value })
    }
    handleLogin = (e) => {
        e.preventDefault();
        alert('Logged in successfully');
    }
    render() {
        return (<React.Fragment>
            <form>
                <div className="form-group">
                    <label>Username:</label>
                    <input style={{ width: '40%' }} type="text" className="form-control" value={this.state.name} id="name" placeholder="Enter Name" name="name" onChange={this.setEmpState} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input style={{ width: '40%' }} type="password" className="form-control" value={this.state.password} id="pwd" placeholder="Enter password" name="password" onChange={this.setEmpState} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
            </form>
        </React.Fragment>)
    }
}
export default RFD2Login;
