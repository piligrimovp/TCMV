import React from "react";
import {Button, ButtonGroup, Image} from "react-bootstrap";
import defImage from '../../media/none_user_image.png';

class ProfileImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            src: props.src || defImage,
            value: {},
        }
    }

    fileUpload = (e) => {
        e.persist();
        this.setState({
            src: URL.createObjectURL(e.target.files[0]),
            value: e.target.files[0]
        });
    }

    fileDelete = () => {
        this.setState({
            src: defImage,
            value: {}
        });
    }

    render() {
        return <div className={'d-flex flex-column align-items-center'}>
            <Image src={this.state.src} className={'mw-100'}/>
            <input type={'file'} hidden={true} id={'imageInput'} onChange={this.fileUpload}
                   ref={inp => this.refImageInput = inp}/>
            <div className={'w-25 mt-3'}>
                <Button className={'w-100'} onClick={() => this.refImageInput.click()}>Upload</Button>
                <Button className={'mt-1 w-100'} onClick={this.fileDelete}>Delete</Button>
            </div>
        </div>
    }
}

export default ProfileImage;