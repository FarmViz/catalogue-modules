import React, { Component } from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './OfferProbePreOrder.css';

class OfferProbePreOrder extends Component {


    render() {
        return (
            <>
                
                    <div className="dsk-7 tab-8 mob-12 blueDiv">
                    <div className=" dsk-6 tab-10 mob-10 column flex align-items-flex-end ">
                        <h1 className="yellow">PRÉ-COMMANDER</h1>
                        <h2>votre PACK MOBILE</h2>
                        <h3>Sonde de thermométrie intelligente</h3>
                        <div className=" dsk-8 tab-10 mob-10 row flex contentFlexEnd">
                            <ul className=" column align-items-flex-end ">
                                <div className=" flex align_right form-group ">
                                    <li className="paddingPreCommande test">1 sonde de thermoétrie </li>
                                    <input type="checkbox" id="test1" defaultChecked />
                                    <label className="padd" htmlFor="test1" aria-describedby="label"></label>
                                </div>
                                <div className="align_right flex" >
                                    <li className="paddingPreCommande">Application Mobile  </li>
                                    <input type="checkbox" id="test2" defaultChecked />
                                    <label className="padd" htmlFor="test2" aria-describedby="label"></label>
                                </div>
                                <div className="align_right flex" >
                                    <li className="paddingPreCommande">Service Client </li>
                                    <input type="checkbox" id="test3" defaultChecked />
                                    <label className="padd" htmlFor="test3" aria-describedby="label"></label>
                                </div>
                                <div className="align_right flex">
                                    <li className="paddingPreCommande">Garantie 1 an  </li>
                                    <input type="checkbox" id="test4" defaultChecked />
                                    <label className="padd" htmlFor="test4" aria-describedby="label"></label>
                                </div>
                                <div className="align_right flex">
                                    <li className="paddingPreCommande">Votre sonde vous suit dans les packs  </li>
                                    <input type="checkbox" id="test5" defaultChecked />
                                    <label className="padd" htmlFor="test5" aria-describedby="label"></label>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className=" dsk-6 tab-10 mob-10 column flex align-items-flex-end">
                    <div>
                    <h1 className="yellow">149€</h1>
                    <div className="barre" id="barre" ></div>
                    <div className="prix" id="prix"><p>199€"</p></div>
                </div>
                    </div>
                    <div className=" dsk-6 tab-10 mob-10 row">
                        <a href="/decouvrir">Découvrir</a>
                        <button className="button_transparent">PRÉCOMMANDER</button>
                    </div>
                    <div className="jesais pas encore ">
                        <p>
                            * Offre de lancement valable du 24/02/2020 au 31/05/2020 voir <a href="/condition">conditions générales</a>
                        </p>
                    </div>
                    </div>
            </>
        )
    }
}


export default OfferProbePreOrder;