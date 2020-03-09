import React from "react";
import '../Css/Global.css';
import '../Css/Grid.css';
import '../TopBanner/TopBannerContainer.css';
import TopBannerLeft from './TopBannerLeft';
import TopBannerRight from './TopBannerRight';

class TopBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            // TopBannerContainer
            <div className="dsk-12 tab-12 mob-12 height-top-banner greenDiv row justContCenter">


            {/* TopBanner */}
            <div className="dsk-12 tab-12 mob-12 max-width justContCenter flex alignItemCenter">
                <TopBannerLeft/>
                <TopBannerRight/>
            </div>

            </div>
        );
    }
}

export default TopBanner;

