// Banière du pied de page

import React from "react";
import '../Css/Global.css';
import '../Css/Grid.css';
import '../TopBanner/TopBannerContainer.css';


class DownBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            // DownBannerContainer
            <div className="dsk-12 tab-12 mob-12 height-top-banner greenDiv row justContCenter bordersup">


                {/* DownBanner */}
                <div className="dsk-12 tab-12 mob-12 max-width justContCenter row alignItemCenter">

                    {/* texte de la banière du pied de page */}
                    <p className="texte14Bold">ⒸCopyright 2019-2020 FARMVIZ SAS</p><p className="texte14Bold padding-down"> All Rights Reserved</p> 

                </div>

            </div>
        );
    }
}

export default DownBanner;

