import React, {Component} from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './FooterBanner.css';


class FooterBanner extends Component {


    render() {
        return(
            <>

                <div className="dsk-12 tab-12 mob-12 row greenDiv FooterBanner">
                    <p>© Copyright 2019-2020 FARMVIS SAS</p><p> .All Rights Reserved</p>
                </div>
            </>
        )
    }
}


export default FooterBanner;