import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class RFRRLogin extends React.Component {
    constructor(props){
        super(props);
        this.state = { name: '', password: ''}
        this.nameRef = React.createRef()
        this.pwdRef = React.createRef()
    }
    handleLogin = (e) => {
        e.preventDefault();
        if(this.nameRef.current.value==="" && this.pwdRef.current.value==="") {
            alert("Please enter username and password")
        } else
        alert("Welcome " + this.nameRef.current.value);
    }
    render() {
        return(<React.Fragment>
            <form>
                <div className="form-group">
                    <label>Username:</label>
                    <input style={{width:'40%'}} type="text" className="form-control" id="name" placeholder="Enter Name" name="name" ref={this.nameRef}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input style={{width:'40%'}} type="password" className="form-control" id="password" placeholder="Enter password" name="password" ref={this.pwdRef} />
                </div>
               <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
           </form>
        </React.Fragment>)
    }
}
export default RFRRLogin;
