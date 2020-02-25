import React, { Component } from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './Footer1.css';

class FooterSocialNetwork extends Component {


    render() {
        return (
            <div className="dsk-3 tab-3 mob-12 center column txt blueDiv">
                <h4 className="paddingh2 ">Rejoignez-Nous</h4>
                <div className="reseaux" >
                    <img className="size-img-footer2" src="/logo192.png" alt="logo" />
                    <img className="size-img-footer2" src="/logo192.png" alt="logo" />
                    <img className="size-img-footer2" src="/logo192.png" alt="logo" />
                    
                </div>
            </div>

        )
    }
}

export default FooterSocialNetwork;