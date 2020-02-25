import React from 'react';
import { Switch, Route } from "react-router-dom";
import Hello from './components/Hello';



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
