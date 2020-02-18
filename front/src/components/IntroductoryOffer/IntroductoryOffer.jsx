import React, { Component } from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './IntroductoryOffer.css'


class IntroductoryOffer extends Component {



    render() {
        return (

            <>
                <div className="mob-12 tab-12 tabx-12 dsk-12  row IntroductoryOfferContainer">
                    <div className="dsk-4 tab-4 tabx-4 mob-12 imageBlock">
                        <img src="" alt="silo" />
                        <img src="" alt="photo pack" />
                    </div>
                    <div className="dsk-8 tab-8 tabx-8 mob-12 blue-background textBlock">
                        <h1>PRE-COMMANDE</h1>
                        <h2>votre PACK MOBILE</h2>
                        <h3>Sonde de thermométrie intelligente</h3>
                        <div className="">
                            
                        </div>
                        
                    </div>

                </div>

                    
            </>

        )
    }



}




export default IntroductoryOffer;