import React, { Component } from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './OfferProbePreOrder.css';

class OfferProbePreOrder extends Component {


    render() {
        return (
            <>
                <div className="dsk-7 tab-8 mob-12 blueDiv">
                    <div className=" dsk-6 tab-10 off-mob-1 mob-10 column flex align-items-flex-end ">
                        <h1 className="yellow graisse600 marginT1 alig">PRÉCOMMANDER</h1>
                        <h2 className=" text14Bold">votre PACK MOBILE</h2>
                        <h3 className=" text14Bold">Sonde de thermométrie intelligente</h3>
                        <div className=" dsk-8 tab-10 mob-11 row flex contentFlexEnd marginT1">
                            <ul className=" column align-items-flex-end ">
                                <div className=" flex align_right paddingPreCommande form-group ">
                                    <li className="paddingPreCommande text12Bold">1 sonde de thermométrie </li>
                                    <input type="checkbox" id="test1" defaultChecked disabled="disabled" />
                                    <label className="padd" htmlFor="test1" aria-describedby="label"></label>
                                </div>
                                <div className="align_right flex paddingPreCommande" >
                                    <li className="paddingPreCommande text12Bold">Application Mobile  </li>
                                    <input type="checkbox" id="test2" defaultChecked disabled="disabled"/>
                                    <label className="padd" htmlFor="test2" aria-describedby="label"></label>
                                </div>
                                <div className="align_right flex paddingPreCommande" >
                                    <li className="paddingPreCommande text12Bold">Service Client </li>
                                    <input type="checkbox" id="test3" defaultChecked disabled="disabled"/>
                                    <label className="padd" htmlFor="test3" aria-describedby="label"></label>
                                </div>
                                <div className="align_right flex paddingPreCommande">
                                    <li className="paddingPreCommande text12Bold">Garantie 1 an  </li>
                                    <input type="checkbox" id="test4" defaultChecked disabled="disabled"/>
                                    <label className="padd" htmlFor="test4" aria-describedby="label"></label>
                                </div>
                                <div className="align_right flex paddingPreCommande">
                                    <li className="paddingPreCommande text12Bold">Votre sonde vous suit dans les packs  </li>
                                    <input type="checkbox" id="test5" defaultChecked disabled="disabled"/>
                                    <label className="padd" htmlFor="test5" aria-describedby="label"></label>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className=" dsk-6 tab-10 mob-10 column flex align-items-flex-end">
                        <div>
                            <h1 className="yellow  prixPromo">149€</h1>
                            <div className="barre content" id="barre" ></div>
                            <div className="prix" id="prix"><p className="graisse600 taillePrix content">199€</p></div>
                        </div>

                    </div>
                    <div className="dsk-6 tab-10 mob-10 row flex flex-end">
                        <div className="marginB10">
                            <a href="/decouvrir" className="souligner text12 ">Découvrir</a>
                            <button className="button_transparent graisse600 marginL3"> <a href="/ventilation">PRÉCOMMANDER</a></button>
                        </div>
                    </div>
                    <div className="div_slogan ">
                        <p className="slogan marginB1">
                            * Offre de lancement valable du 24/02/2020 au 31/05/2020 voir <a href="/condition">conditions générales</a>
                        </p>
                    </div>
                </div>
            </>
        )
    }
}


export default OfferProbePreOrder;