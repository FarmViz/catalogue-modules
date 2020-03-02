import React, { Component } from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './OfferProbePreOrder.css';

class OfferProbePreOrder extends Component {


    render() {
        return (
            <>
                <div className="dsk-8 tab-6 mob-12 blueDiv inter-media-offer column divglobale justContCenter ">
                    <div className="dsk-10 tab-10 mob-10 column alignItemFlexEnd sousglobaldiv">
                        <div className=" dsk-10 tab-12  mob-10 column alignItemFlexEnd">
                            <h2 className="yellow graisse600 marginTopPrecom alig">PRÉ-COMMANDER</h2>
                            <h2 className=" text14Bold marginB1">votre PACK MOBILE</h2>
                            <h3 className=" text14Bold">Sonde de thermométrie intelligente</h3>
                            <div className=" dsk-8 tab-10 mob-11 row justContFlexEnd marginTop1rem">
                                <ul className=" column alignItemFlexEnd ">
                                    <div className=" flex align_right paddingPreCommande form-group ">
                                        <li className="paddingPreCommande text12Bold">1 sonde de thermométrie </li>
                                        <input type="checkbox" id="test1" defaultChecked disabled="disabled" />
                                        <label className="padd" htmlFor="test1" aria-describedby="label"></label>
                                    </div>
                                    <div className="align_right flex paddingPreCommande" >
                                        <li className="paddingPreCommande text12Bold">Application Mobile  </li>
                                        <input type="checkbox" id="test2" defaultChecked disabled="disabled" />
                                        <label className="padd" htmlFor="test2" aria-describedby="label"></label>
                                    </div>
                                    <div className="align_right flex paddingPreCommande" >
                                        <li className="paddingPreCommande text12Bold">Service Client </li>
                                        <input type="checkbox" id="test3" defaultChecked disabled="disabled" />
                                        <label className="padd" htmlFor="test3" aria-describedby="label"></label>
                                    </div>
                                    <div className="align_right flex paddingPreCommande">
                                        <li className="paddingPreCommande text12Bold">Garantie 1 an  </li>
                                        <input type="checkbox" id="test4" defaultChecked disabled="disabled" />
                                        <label className="padd" htmlFor="test4" aria-describedby="label"></label>
                                    </div>
                                    <div className="align_right flex paddingPreCommande">
                                        <li className="paddingPreCommande text12Bold">Votre sonde vous suit dans les packs  </li>
                                        <input type="checkbox" id="test5" defaultChecked disabled="disabled" />
                                        <label className="padd" htmlFor="test5" aria-describedby="label"></label>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className=" dsk-10 tab-10 mob-10 column  alignItemFlexEnd">
                            <div className="marginRight_10 text14Bold">
                                <p>Offre de lancement *</p>
                            </div>
                            <div>
                                <h1 className="yellow  prixPromo">149€</h1>
                                <div className="barre content" id="barre" ></div>
                                <div className="prix" id="prix"><p className="graisse600 taillePrix content">199€</p></div>
                            </div>

                        </div>
                        <div className="dsk-9 tab-10 mob-10 row justContBetween marginB10">
                            
                                <a href="/decouvrir" className="souligner text12 ">Découvrir</a>
                                <button className="button_transparent graisse600 "> <a href="/ventilation">PRÉ-COMMANDER</a></button>
                            
                        </div>
                        <div className="div_slogan ">
                            <p className="slogan marginB10">
                                * Offre de lancement valable du 24/02/2020 au 31/05/2020 voir <a href="/condition">conditions générales</a>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default OfferProbePreOrder;