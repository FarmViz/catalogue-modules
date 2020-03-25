import React from 'react';
import { Switch, Route } from "react-router-dom";
import TopBanner from './components/TopBanner/TopBannerContainer';
import DownBanner from './components/DownBanner/DownBannerContainer';
import './components/Css/Reset.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import FooterV2 from './components/Footer/FooterV2';
import ErrorContainer from './components/ErrorPage/ErrorContainer';
import BlockRes from './components/BlockRes/BlockRes';
import Accordéon from './components/Accordéon/Accordéon';
import TabsSection from './components/Onglets/Tabs';
import BlocImgLeftTxtRight from './components/ImageTextBloc/ImageLeftTextRight';
import BlocTxtLeftImgRight from './components/ImageTextBloc/TextLeftImageRight';
import Carrousel from './components/Carrousel/Carrousel';
import ModalDiv from './components/Modale/Modal';
import ContactBlock from './components/ContactBlock/ContactBlock';
import NewsLetterSuscribing from './components/NewsLetterSuscribing/NewsLetterSuscribing';
import RssReader from './components/RssReader/RssReader';









class App extends React.Component {

  render() {
    return (
      <>



        <TopBanner />
        <NavbarContainer />
        <RssReader />
        <NewsLetterSuscribing />
        <ModalDiv />
        <Accordéon />
        <BlockRes />
        <ErrorContainer />
        <Carrousel />
        <TabsSection />
        <BlocImgLeftTxtRight />
        <BlocTxtLeftImgRight />
        <ContactBlock />



        {/* <Switch>

          <Route exact path="/error" component={ErrorContainer} />

        </Switch> */}
        

        <FooterV2 />
        <DownBanner /> 


        
      </>
    );
  }
}

export default App;
