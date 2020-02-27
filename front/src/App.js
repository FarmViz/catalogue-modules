import React from 'react';
import { Switch, Route } from "react-router-dom";
import TopBanner from './components/TopBanner/TopBannerContainer';
import DownBanner from './components/DownBanner/DownBannerContainer';
import './components/Css/Reset.css';
import NavbarContainer from './components/Navbar/NavbarContainer';
import FooterContainer from './components/Footer/FooterContainer';

class App extends React.Component {

  render() {
    return (
      <>

      <TopBanner/>
      <NavbarContainer />
      

        {/* <Switch>

          <Route exact path="/" component={} />

        </Switch> */}


        <FooterContainer />
        <DownBanner/>

      </>
    );
  }
}

export default App;
