import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import ProfileImage from "../../components/profile_image";
import {Link} from "react-router-dom";
import {USER_AUTHORIZED} from "../../constants";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Container className={'pt-5'}>
            <h1>Username\Profile</h1>
            <Form className={'w-100 mt-5'}>
                <Row className={'justify-content-center'}>
                    <Col sm={8}>
                        <Form.Group as={Row} controlId="name">
                            <Col sm={4}>
                                <Form.Label>
                                    E-Mail
                                </Form.Label>
                            </Col>
                            <Col sm={8} className={'pr-0'}>
                                {this.context.user.email}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="name">
                            <Col sm={4}>
                                <Form.Label>
                                    Current Password
                                </Form.Label>
                            </Col>
                            <Col sm={8} className={'pr-0'}>
                                <Form.Control type="text"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="last_name">
                            <Col sm={4}>
                                <Form.Label>
                                    New Password
                                </Form.Label>
                            </Col>
                            <Col sm={8} className={'pr-0'}>
                                <Form.Control type="text"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="country">
                            <Col sm={4}>
                                <Form.Label>
                                    Repeat Password
                                </Form.Label>
                            </Col>
                            <Col sm={8} className={'pr-0'}>
                                <Form.Control type="text"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className={'justify-content-end'}>
                            <Col sm={2} className={'p-0'}>
                                <Button block={true}>OK</Button>
                            </Col>
                            <Col sm={2} className={'p-0 ml-1'}>
                                <Button as={Link} to={'/profile'} block={true}>Cancel</Button>
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>;
    }
}

Login.contextType = USER_AUTHORIZED;

export default Login;