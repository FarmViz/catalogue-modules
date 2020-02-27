import React from "react";
import '../Css/Global.css';
import '../Css/Grid.css';
import './FooterSocialNetwork.css';

class FooterSocialNetwork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="dsk-3 tab-3 mob-12 flex center column">

                <h2 className="center flex">REJOIGNEZ-NOUS</h2>

                <div className="dsk-12 tab-12 mob-12 flex evenly ">
                    <img className="size-logo-reseau" href="" src="" />
                    <img className="size-logo-reseau" href="" src="" />
                    <img className="size-logo-reseau" href="" src="" />
                </div>

            </div>
        );
    }
}

export default FooterSocialNetwork;