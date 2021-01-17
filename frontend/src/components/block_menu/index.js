import React from "react";
import {Link} from 'react-router-dom'

class BlockMenu extends React.Component {
    render() {
        return (
            <div className={'blockInfo'}>
                <div className={'blockInfo-header'}>
                    <div className="blockInfo-header_title">
                        {this.props.title}
                    </div>
                </div>
                <div className={'blockInfo-content'}>
                    {this.props.links.map((e, i) => {
                        return <Link as={'div'} key={i} to={e.link}>
                            {e.name}
                        </Link>
                    })}
                </div>
            </div>
        );
    }
}

export default BlockMenu;