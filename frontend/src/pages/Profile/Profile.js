import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import ProfileImage from "../../components/profile_image";
import {Link} from "react-router-dom";

class Profile extends React.Component {
    render() {
        return <Container className={'pt-5'}>
            <h1>Username\Profile</h1>
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
                                    About
                                </Form.Label>
                            </Col>
                            <Col sm={8} className={'pr-0'}>
                                <Form.Control as={'textarea'} rows={4}/>
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

export default Profile;