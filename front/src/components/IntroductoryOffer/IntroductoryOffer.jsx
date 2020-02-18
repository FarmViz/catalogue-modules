import React, { Component } from 'react';
import '../Css/Global.css';
import './IntroductoryOffer.css'


class IntroductoryOffer extends Component {



    render() {
        return (

            <>
                <div className="mob-12 tab-12 tabx-12 dsk-12 blue-background IntroductoryOfferContainer">

                    <img src="" alt="Visuel offre de lancement" />
                    <h1 className="yellow IntroductoryOfferTitle ">PRE-COMMANDE</h1>
                    <h2></h2>
                    <h4></h4>
                    <div>
                        <div className="row">
                            <p></p>
                            <input type="checkbox" className="offerCheckbox" checked="checked"/>
                        </div>
                        <div className="row">
                            <p></p>
                            <img src="" alt="Case cochée" />
                        </div>
                        <div className="row">
                            <p></p>
                            <img src="" alt="Case cochée" />
                        </div>
                        <div className="row">
                            <p></p>
                            <img src="" alt="Case cochée" />
                        </div>
                        <div className="row">
                            <p></p>
                            <img src="" alt="Case cochée" />
                        </div>
                        <h3></h3>
                        <h1 className="yellow IntroductoryOfferTitle ">149€</h1>
                        <div>
                            <h3 className="white IntroductoryOfferOriginalPrice ">199€</h3>
                        </div>
                        <div>
                            <p classeName="white discover">Découvrir</p>
                            <button>PRECOMMANDER</button>
                        </div>
                    </div>
                    <pre className="blue-background IntroductoryOfferText"></pre>
                </div>

            </>

        )
    }



}




export default IntroductoryOffer;