import React from 'react';
import { Switch, Route } from "react-router-dom";
import TopBanner from './components/TopBanner/TopBannerContainer';
import DownBanner from './components/DownBanner/DownBannerContainer';
import './components/Css/Reset.css';
import NavbarContainer from './components/Navbar/NavbarContainer';


class App extends React.Component {

  render() {
    return (
      <>

      <TopBanner/>
      <NavbarContainer />
      

        {/* <Switch>

          <Route exact path="/" component={} />

        </Switch> */}
        <DownBanner/>

      </>
    );
  }
}

export default App;
