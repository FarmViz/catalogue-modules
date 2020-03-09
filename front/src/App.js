import React from 'react';
import { Switch, Route } from "react-router-dom";
import TopBanner from './components/TopBanner/TopBannerContainer';
import DownBanner from './components/DownBanner/DownBannerContainer';
import './components/Css/Reset.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import FooterContainer from './components/Footer/FooterContainer';
import ProbeOfferContainer from './components/ProbeOffer/ProbeOfferContainer';
import ErrorContainer from './components/ErrorPage/ErrorContainer';
import BlockRes from './components/BlockRes/BlockRes';
import Accordeon from './components/Catalogue Modules/Accordéon/Accordéon';

class App extends React.Component {

  render() {
    return (
      <>


      <Accordeon/>


        {/* <TopBanner />

        <NavbarContainer />

        <ProbeOfferContainer /> */}


        {/* <Switch>

          <Route exact path="/error" component={ErrorContainer} />

        </Switch> */}

        {/* <BlockRes/>

        <FooterContainer />
        <DownBanner /> */}

        
      </>
    );
  }
}

export default App;
