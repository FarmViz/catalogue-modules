import React from 'react';
import { Switch, Route } from "react-router-dom";
import TopBanner from './components/TopBanner/TopBannerContainer';


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
