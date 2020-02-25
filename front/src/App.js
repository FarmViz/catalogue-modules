import React from 'react';
import { Switch, Route } from "react-router-dom";
// import Devis from './components/email/Devis';
import Recrutement from './components/Email/Recrutement/Recrutement';
import Contact from "./components/Email/Contact/Contact";
import Upload from './components/Upload/UploadFile';
import './components/Css/Reset.css';

import './components/Css/Grid.css';
import './components/Css/Global.css';
import IntroductoryOffer from './components/IntroductoryOffer/IntroductoryOffer';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import IntroductoryOffer from './components/IntroductoryOffer/IntroductoryOffer';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      redirectToAdminPage: false,
    };
  }


  
render() {
  return (
    <>
    <Navbar/>
      <Switch>
           <Route exact path="/" component={IntroductoryOffer} /> 
 
          {/* <Route exact path="/devis" component={Devis} /> */}
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/recrutement" component={Recrutement} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
 

        <Footer />
      </>
    );
  }

}
export default App;
