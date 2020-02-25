import React from 'react';
import { Switch, Route } from "react-router-dom";
import Hello from './components/Hello';
import TopBannerLeft from './components/TopBanner/TopBannerLeft';



class App extends React.Component {

  render() {
    return (
      <>
        <Hello />
      </>
    );
  }
}

export default App;
