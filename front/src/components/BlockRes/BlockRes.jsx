import React from "react";
import '../Css/Global.css';
import '../Css/Grid.css';
import '../BlockRes/BlockRes.css';

class BlockRes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            < div className="container-fluid fond-img max-long height-parent wrap d-flex justify separateurBlock" >

                {/* <!-- --------Block enfant-------- --> */}
                < div className="col-xs-12 col-sm-12 col-md-11 col-lg-11 d-flex wrap justify" >

                    {/* <!-- --------Sous-Block enfant 1-------- --> */}
                    < div className="container background-child col-xs-12 col-sm-12 col-md-5 col-lg-5 height-child margin margin-block-enfant-right" >

                        <div className="height-text txt-center">
                            <h2>Block 1</h2>
                            <p>lorem ipsum del rotor</p>
                        </div>

                        <div className="height-btn txt-center">
                            <input className="btn btn-primary" type="button" value="Bouton" href="/" />
                        </div>

                    </div>
                    {/* <!-- --------Sous-Block enfant 1-------- --> */}


                    {/* <!-- --------Sous-Block enfant 2-------- --> */}
                    <div className="container background-child col-xs-12 col-sm-12 col-md-5 col-lg-5 height-child margin margin-block-enfant-left">

                        <div className="height-text txt-center">
                            <h2>Block 2</h2>
                            <p>lorem ipsum del rotor</p>
                        </div>

                        <div className="height-btn txt-center">
                            <input className="btn btn-primary" type="button" value="Bouton" href="/" />
                        </div>
                        {/* <!-- --------Sous-Block enfant 2-------- --> */}

                    </div>
                    {/* <!-- --------Block enfant-------- --> */}

                </div >
                {/* <!-- --------Block parent-------- --> */}



            </div>

        );
    }
}

export default BlockRes;
