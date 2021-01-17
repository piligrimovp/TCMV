import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import BlockMenu from "../components/block_menu";
import {USER_AUTHORIZED} from "../constants";

class Main extends React.Component {
    render() {
        return <Container className={'pt-5'}>
            <h1>Home</h1>
            <Form className={'w-100'}>
                <Row>
                    <Col sm={4}>
                        {this.context.user.isAdmin && <BlockMenu title={'Users'} links={[
                            {
                                name: 'Browse',
                                link: '',
                            },
                            {
                                name: 'Create',
                                link: '',
                            },
                            {
                                name: 'Assign',
                                link: '',
                            }
                        ]}/>}
                    </Col>
                    <Col sm={4}>
                        {this.context.user.isAdmin && <BlockMenu title={'Events'} links={[
                            {
                                name: 'Browse',
                                link: '',
                            },
                            {
                                name: 'Create',
                                link: '',
                            },
                            {
                                name: 'Assign',
                                link: '',
                            }
                        ]}/>}
                        {!this.context.user.isAdmin && <BlockMenu title={'Events'} links={[
                            {
                                name: 'Browse',
                                link: '',
                            },
                        ]}/>}
                    </Col>
                    <Col sm={4}>
                        {this.context.user.isAdmin && <BlockMenu title={'Documents'} links={[
                            {
                                name: 'Browse',
                                link: '',
                            },
                            {
                                name: 'Create',
                                link: '',
                            },
                            {
                                name: 'Assign',
                                link: '',
                            }
                        ]}/>}
                    </Col>
                </Row>
            </Form>
        </Container>
    }
}

Main.contextType = USER_AUTHORIZED;

export default Main;
