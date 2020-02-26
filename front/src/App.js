import React from 'react';
import { Switch, Route } from "react-router-dom";
import TopBanner from './components/TopBanner/TopBannerContainer';
import DownBanner from './components/DownBanner/DownBannerContainer';
import './components/Css/Reset.css';


class App extends React.Component {

  render() {
    return (
      <>

      <TopBanner/>
      

        {/* <Switch>

          <Route exact path="/" component={} />

        </Switch> */}
        <DownBanner/>

      </>
    );
  }
}

export default App;
