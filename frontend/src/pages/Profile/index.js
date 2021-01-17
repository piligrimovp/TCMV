import React from "react";
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import ProfileImage from "../../components/profile_image";
import BlockInfo from "../../components/block_info";
import {Link} from "react-router-dom";

class Profile extends React.Component {

    setPin = () => {

    }

    render() {
        let linkReturn = this.props.history.location.pathname === window.location.pathname ? '/' : this.props.history.location.pathname;
        return <Container className={'pt-5'}>
            <h1>Username</h1>
            <Form className={'w-100'}>
                <Row>
                    <Col sm={6}>
                        <ProfileImage/>
                    </Col>
                    <Col sm={6}>
                        <BlockInfo title={'Login information'} fields={[
                            {
                                name: 'E-Mail',
                                value: 'example@mail.com',
                                key: 'email'
                            },
                            {
                                name: 'Password',
                                value: '********',
                                key: 'password'
                            },
                        ]} editLink={'/profile/login'}/>
                        <BlockInfo title={'Profile information'} fields={[
                            {
                                name: 'First name',
                                value: 'name',
                                key: 'name'
                            },
                            {
                                name: 'Last name',
                                value: 'last name',
                                key: 'last_name'
                            },
                            {
                                name: 'Country',
                                value: 'Russia',
                                key: 'country'
                            },
                            {
                                name: 'About',
                                value: 'about',
                                key: 'about'
                            },
                        ]} editLink={'/profile/profile'}/>
                        <BlockInfo title={'Personal Identification Number'} fields={[
                            {
                                name: 'PIN',
                                value: '********',
                                key: 'pin',
                                callback: this.setPin,
                                callbackText: 'Set PIN'
                            },
                        ]} editLink={'/profile/pin'}/>
                        <div className={'d-flex justify-content-end mt-2'}>
                            <Button>OK</Button>
                            <Button as={Link} to={linkReturn} className={'ml-1'}>Cancel</Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Container>
    }
}

export default Profile;