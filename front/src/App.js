import React from 'react';
import { Switch, Route } from "react-router-dom";
import TopBanner from './components/TopBanner/TopBannerContainer';
import './components/Css/Reset.css';


class App extends React.Component {

  render() {
    return (
      <>

      <TopBanner/>

        {/* <Switch>

          <Route exact path="/" component={} />

        </Switch> */}

      </>
    );
  }
}

export default App;
