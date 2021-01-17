import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ACCESS_TOKEN, USER_AUTHORIZED} from "../../constants";
import {login} from "../../ApiUtils";

class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleLogin = () => {
        login(this.state)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                this.context.changeState(true);
                window.location.reload();
            }).catch(error => {
                console.log(error)
        });
    }

    render() {
        return <Container className={'vertical-center'}>
            <Form className={'mx-auto'}>
                <Form.Group as={Row} controlId="email">
                    <Col sm={3}>
                        <Form.Label>
                            E-Mail
                        </Form.Label>
                    </Col>
                    <Col sm={9} className={'pr-0'}>
                        <Form.Control value={this.state.email} type="email" onChange={(e) => this.setState({email: e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="password">
                    <Col sm={3}>
                        <Form.Label>
                            Password
                        </Form.Label>
                    </Col>
                    <Col sm={9} className={'pr-0'}>
                        <Form.Control value={this.state.password} type="password" onChange={(e) => this.setState({password: e.target.value})}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className={'justify-content-end'}>
                    <Col sm={3} className={'p-0'}>
                        <Button block={true} onClick={this.handleLogin}>Sign in</Button>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className={'justify-content-end'}>
                    <Col sm={3} className={'p-0'}>
                        <Button as={Link} to={'/signup'} block={true}>Sign up</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Container>;
    }
}

Auth.contextType = USER_AUTHORIZED

export default Auth;