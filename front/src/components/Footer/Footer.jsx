import React from "react";
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer_parent">
                <div className="block-footer1">
                    <a className="linkfoot" href="/contact">reseau</a>
                    <a className="linkfoot" href="/mentions">reseau</a>
                </div>

                <div className="block-footer2">
                    <a className="linkfoot" href="/partenaires">reseau</a>
                    <a className="linkfoot" href="/apropos">reseau</a>
                </div>
            </div>

        )
    }
}

export default Footer;