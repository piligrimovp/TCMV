import React from "react";
import {Image, Button} from "react-bootstrap";
import {Link} from 'react-router-dom'
import PencilIcon from "../../media/pencil.png";

class BlockInfo extends React.Component {
    render() {
        return (
            <div className={'blockInfo'}>
                <div className={'blockInfo-header'}>
                    <div className="blockInfo-header_title">
                        {this.props.title}
                    </div>
                    <div className={'blockInfo-header_icon'}>
                        <Link to={this.props.editLink}><Image src={PencilIcon}/></Link>
                    </div>
                </div>
                <div className={'blockInfo-content'}>
                    {this.props.fields.map((e, i) => {
                        return <div key={i} className={'d-flex justify-content-between'}>
                            <span>{e.name}: {e.value}</span>

                            {e.callback != null && <Button variant={'warning'} onClick={e.callback}>
                                {e.callbackText}
                            </Button>}
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default BlockInfo;