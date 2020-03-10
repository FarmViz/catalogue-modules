import React from "react";
import './Fonctionnalite.css';
import '../../Css/Global.css';
import '../../Css/Reset.css';
import '../../Css/Grid.css';

class Fonctionnalite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div class="dsk-12 tab-12 mob-12 row justify-content-center row">

                <div class="dsk-12 tab-12 mob-12 max-long">

                    <div class="section-title text-center">
                        <h2>Des fonctionnalités multiples </h2>

                    </div>

                    <div class="dsk-12 tab-12 mob-12 row justify-content-between mt-4 mob-tab-fonctio ">

                        <div class="d-flex width-height-fonctio-enfant blueDiv mb-3 marge-right-fonctio ">

                            <div class="height-fonction-sous-enfant1 width-fonction-sous-enfant1 d-flex justify-content-center pt-3">

                                <img className="img-size-fonction " src="../../../logo512.png" alt="img" />

                            </div>

                            <div className="column block-sous-enfant-txt-titre">

                                <div class="height-fonction-sous-enfant2 d-flex justify-content-center align-items-center">

                                    <h3>Titre</h3>

                                </div>

                                <div class="height-fonction-sous-enfant3 text-center d-inline flex-wrap pl-2 pr-2">

                                    <p>lorem ipsum daisit </p>

                                </div>
                            </div>
                        </div>

                        <div class=" d-flex width-height-fonctio-enfant blueDiv mb-3 ">



                            <div class="height-fonction-sous-enfant1 width-fonction-sous-enfant1 d-flex justify-content-center pt-3">

                                <img className="img-size-fonction " src="../../../logo512.png" alt="img" />

                            </div>

                            <div className="column block-sous-enfant-txt-titre">

                                <div class="height-fonction-sous-enfant2 d-flex justify-content-center align-items-center">

                                    <h3>Titre</h3>

                                </div>

                                <div class="height-fonction-sous-enfant3 text-center d-inline flex-wrap pl-2 pr-2">

                                    <p>lorem ipsum daisit </p>

                                </div>
                            </div>


                        </div>

                        <div class=" d-flex width-height-fonctio-enfant blueDiv mb-3  marge-left-fonctio ">



                            <div class="height-fonction-sous-enfant1 width-fonction-sous-enfant1 d-flex justify-content-center pt-3">

                                <img className="img-size-fonction " src="../../../logo512.png" alt="img" />

                            </div>

                            <div className="column block-sous-enfant-txt-titre">

                                <div class="height-fonction-sous-enfant2 d-flex justify-content-center align-items-center">

                                    <h3>Titre</h3>

                                </div>

                                <div class="height-fonction-sous-enfant3 text-center d-inline flex-wrap pl-2 pr-2">

                                    <p>lorem ipsum daisit </p>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>





        );
    }
}

export default Fonctionnalite;