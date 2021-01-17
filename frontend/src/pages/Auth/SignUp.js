import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import ProfileImage from "../../components/profile_image";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        let linkReturn = this.props.history.location.pathname === window.location.pathname ? '/' : this.props.history.location.pathname;
        return <Container className={'pt-5'}>
            <h1>Registration</h1>
            <Form className={'w-100'}>
                <Row>
                    <Col sm={6}>
                        <ProfileImage/>
                    </Col>
                    <Col sm={5}>
                        <Form.Group as={Row} controlId="name">
                            <Col sm={4}>
                                <Form.Label>
                                    First Name
                                </Form.Label>
                            </Col>
                            <Col sm={8} className={'pr-0'}>
                                <Form.Control type="text"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="last_name">
                            <Col sm={4}>
                                <Form.Label>
                                    Last Name
                                </Form.Label>
                            </Col>
                            <Col sm={8} className={'pr-0'}>
                                <Form.Control type="text"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="country">
                            <Col sm={4}>
                                <Form.Label>
                                    Country
                                </Form.Label>
                            </Col>
                            <Col sm={8} className={'pr-0'}>
                                <Form.Control type="text"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="email">
                            <Col sm={4}>
                                <Form.Label>
                                    E-Mail
                                </Form.Label>
                            </Col>
                            <Col sm={8} className={'pr-0'}>
                                <Form.Control type="email"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="password">
                            <Col sm={4}>
                                <Form.Label>
                                    Password
                                </Form.Label>
                            </Col>
                            <Col sm={8} className={'pr-0'}>
                                <Form.Control type="password"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="password_confirm">
                            <Col sm={4}>
                                <Form.Label>
                                    Repeat password
                                </Form.Label>
                            </Col>
                            <Col sm={8} className={'pr-0'}>
                                <Form.Control type="password"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className={'justify-content-end'}>
                            <Col sm={2} className={'p-0'}>
                                <Button as={Link} to={'/signup'} block={true}>OK</Button>
                            </Col>
                            <Col sm={2} className={'p-0 ml-1'}>
                                <Button as={Link} to={linkReturn} block={true}>Cancel</Button>
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    }
}

export default SignUp;