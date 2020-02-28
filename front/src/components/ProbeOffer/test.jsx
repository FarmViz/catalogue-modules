import React, { Component } from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './OfferProbePreOrder.css';
import OfferProbePreOrder from './OfferProbePreOrder';

class Test extends Component {


    render() {
        return (
            <>
                
                    <div className="dsk-12 tab-12 mob-12 flex center">
                    <div className="dsk-12 tab-12 mob-12 flex center">
                    <OfferProbePreOrder/>
                    </div>
                    </div>
            </>
        )
    }
}


export default Test;