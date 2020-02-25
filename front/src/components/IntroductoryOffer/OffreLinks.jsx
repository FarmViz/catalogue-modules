import React, { Component } from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './OffreLinks.css';
// import { NavLink } from 'react-router-dom';


class OffreLinks extends Component {


    render() {
        return (
            <>
                <div className="">
                    <div>
                        <h2 className="yellow padding-10">PRÉ-COMMANDER</h2>
                        <h3 className=" padding-10">VOTRE PACK MOBILE</h3>
                        <h4>Sonde de thermométrie intelligente</h4>
                        <div className="display dsk-12 tab-12 mob-12 ">
                            <ul  className="dsk-12 tab-12 mob-12 flex column padding-pack ">

                                <div className="dsk-12 tab-12 mob-12 flex-end display ">
                                    <li>1 sonde de thermoétrie </li>
                                    <input type="checkbox" id="test1" defaultChecked />
                                    <label htmlFor="test1" aria-describedby="label"></label>
                                </div>
                                <div className="dsk-12 tab-12 mob-12 flex-end display" >
                                    <li>Application Mobile  </li>
                                    <input type="checkbox" id="test2" defaultChecked />
                                    <label htmlFor="test2" aria-describedby="label"></label>
                                </div>
                                <div className="dsk-12 tab-12 mob-12 flex-end display" >
                                    <li>Service Client </li>
                                    <input type="checkbox" id="test3" defaultChecked />
                                    <label htmlFor="test3" aria-describedby="label"></label>
                                </div>
                                <div className="dsk-12 tab-12 mob-12 flex-end display">
                                    <li>Garantie 1 an  </li>
                                    <input type="checkbox" id="test4" defaultChecked />
                                    <label htmlFor="test4" aria-describedby="label"></label>
                                </div>
                                <div className="dsk-12 tab-12 mob-12 flex-end display">
                                    <li>Votre sonde vous suit dans les packs  </li>
                                    <input type="checkbox" id="test5" defaultChecked />
                                    <label htmlFor="test5" aria-describedby="label"></label>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="display flex-end padding-pack">
                         <p>Offre de lancement * </p> 
                <div>
                    <h1 className="yellow">149€</h1>
                    <div className="barre" id="barre" ></div>
                    <div className="prix" id="prix"><p>199€"</p></div>
                </div>
                    </div>
                    <div className="display space-around padding-precommande">
                        <a href="/decouvrir">Découvrir</a>
                        <button className="button_transparent">PRECOMMANDER</button>
                    </div>
                    <div className="font-offre-valable center display padding-precommande">
                        <p>
                            * Offre de lancement valable du 24/02/2020 au 31/05/2020 voir <a href="/condition">conditions générales</a>
                        </p>
                    </div>
                </div>

            </>
        )
    }
}
export default OffreLinks;
