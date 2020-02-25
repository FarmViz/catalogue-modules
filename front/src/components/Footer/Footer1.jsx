import React, { Component } from 'react';
import '../component/Footer1.css';
import '../App.css';
import '../Css/Global.css';
import '../Css/Grid.css';

class Footer1 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="dsk-12 tab-12 mob-12 fond-footer blue flex txt-white">

                {/* block1 footer------------------------------------------------- */}
                <div className="dsk-2 tab-3 mob-12 center block flex-direction txt">
                    <img className="size-img-footer1" src="/logo192.png" alt="logo" />
                    <h2 className="">Contactez-Nous</h2>
                    <div className="center flex-direction">
                        <a className="txt-white liste-none" href="tel:+33683607216"><i class="fi-xnsrxl-phone-solid"></i>+33 2 42 45 36 55</a>
                        <a className="txt-white liste-none" href="mailto:contact@farmviz.fr"><i class="fi-xwsuxl-envelope-solid"></i>contact@farmviz.fr</a>
                        <a className="txt-white liste-none" href="/">Formulaire de Contact</a>
                    </div>
                </div>
                {/* block1 footer------------------------------------------------- */}

                <div className="dsk-3 tab-3 mob-12 center">
                    
                </div>

                <div className="dsk-4 tab-3 mob-12 center">
                    
                </div>

                {/* block4 footer------------------------------------------------- */}
                <div className="dsk-3 tab-3 mob-12 block center flex-direction txt">
                    <h2>Rejoingnez-Nous</h2>
                    <div className="reseaux" >
                        <img className="size-img-footer2"  src="/logo192.png" alt="logo" />
                        <img className="size-img-footer2" src="/logo192.png" alt="logo" />
                        <img className="size-img-footer2" src="/logo192.png" alt="logo" />
                        <img className="size-img-footer2" src="/logo192.png" alt="logo" />
                        <img className="size-img-footer2" src="/logo192.png" alt="logo" />
                    </div>
                </div>
                {/* block4 footer------------------------------------------------- */}


            </div>

        );
    }
}

export default Footer1;