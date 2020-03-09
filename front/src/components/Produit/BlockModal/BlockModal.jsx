import React from "react";
import './BlockModal.css';
import '../Css/Global.css';

class BlockModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>

            <div className="box">
                <a className="button" href="#popup1">Let me Pop up</a>
            </div>

            <div id="popup1" className="overlay">
                <div className="popup max-width">
                    <div className="pop column justiContentCenter">

                    <h1>Titre</h1>
                    <h2>Sous-Titre</h2>
                    
                    <a className="close" href="/" >&times;</a>

                    </div>

                    <div className="column justiContentCenter alignCenter">

                    <button className="size-btn" >
                        <a href="/"></a>
                        Bouton</button>

                    </div>
                </div>
            </div>


        </div>);
    }
}

export default BlockModal;