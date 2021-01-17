import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Pin extends React.Component {
    render() {
        return <Container className={'pt-5'}>
            <h1>Username\PIN</h1>
            <Form className={'w-100 mt-5'}>
                <Row className={'justify-content-center'}>
                    <Col sm={6}>
                        <Form.Group as={Row} controlId="name">
                            <Col sm={4}>
                                <Form.Label>
                                    Enter PIN
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

export default Pin;