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
            <div className="dsk-3 tab-12 mob-12 flex center column padding25TopBottom">

                <h2 className="center flex texte14">REJOIGNEZ-NOUS</h2>

                <div className="dsk-12 tab-12 mob-12 flex evenly ">
                    <img className="size-logo-reseau" href="" src="" alt="facebook"/>
                    <img className="size-logo-reseau" href="" src="" alt="twitter"/>
                    <img className="size-logo-reseau" href="" src="" alt="linkedin"/>
                </div>

            </div>
        );
    }
}

export default FooterSocialNetwork;