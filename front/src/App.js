import React from 'react';
import { Switch, Route} from "react-router-dom";
// import Devis from './components/email/Devis';
import Recrutement from './components/Email/Recrutement/Recrutement';
import Contact from "./components/Email/Contact/Contact";
import Upload from './components/Upload/UploadFile';
import './components/Css/Reset.css';

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
      <Switch>
          {/* <Route exact path="/" component={Accueil} /> */}
          {/* <Route exact path="/devis" component={Devis} /> */}
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/recrutement" component={Recrutement} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
    </>
  );
}
}
export default App;
