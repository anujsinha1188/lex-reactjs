import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
class RFRBD2Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isvalid: false, message: "" }
        this.handleLogin = this.handleLogin.bind(this);
    };

    handleLogin(event) {
        event.preventDefault();
        const login = event.currentTarget;
        if (login.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            this.setState({ message: "" })
        }
        else {
            this.setState({ message: "Form submitted successfully!" })
        }
        this.setState({ isvalid: true });
    }
    render() {
        const { isvalid } = this.state;
        return (<Form style={{ backgroundColor: "#DCDCDC", width: "50%" }}
            noValidate validated={isvalid}
            onSubmit={e => this.handleLogin(e)}>
            <div style={{ padding: "10px" }}>
                <h1> Login </h1><br />
                <Form.Group>
                    <label> Name </label>
                    <Form.Control type="text" style={{ backgroundColor: "##C0C0C0" }}
                        name="name" placeholder="Enter Name"
                        required />
                    <Form.Control.Feedback type="invalid">
                        UserName is required
                       </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Form.Group >
                    <label> Password </label>
                    <Form.Control type="password" style={{ backgroundColor: "##C0C0C0" }}
                        name="password" placeholder="Enter Password"
                        required />
                    <Form.Control.Feedback type="invalid">
                        Password is required
                      </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Button type="submit" variant="primary"> Login </Button>
            </div>

            {this.state.message !== "" && <Alert variant="success"> {this.state.message} </Alert>}
        </Form>);
    }
}
export default RFRBD2Login;
