import React from "react";
import Recaptcha from 'react-recaptcha';
import './Footer.css'
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;


class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trad_accueil: [],
      email: "",
      load: false,
      isLoading: false,
      asLoading: false,
      isVerified: false
    }
    {
      //      Fetch
      fetch(SERVER_ADDRESS + '/trad_accueil')
        .then(res => res.json())
        .then(res => this.setState({ trad_accueil: res }, () => this.setState({ load: true })))

      // captcha
      this.verifyCallback = this.verifyCallback.bind(this);
      this.RecaptchapLoader = this.RecaptchapLoader.bind(this);
      // fin captcha
    }
    // FIN DU fetch


    // Envoie du mail pour la newsletter
    this.handlerChange = this.handlerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handlerChange(event) {
    console.log(event.target.name);
    switch (event.target.name) {
      case 'email':
        this.setState({ email: event.target.value });
        break;
      default:
        break;
    }
  }
  snackbarClose = (event) => {
    this.setState({ snackbaropen: false })
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.isVerified) {
      this.setState({ isLoading: true })
      console.log(this.state)
      fetch(SERVER_ADDRESS + '/news_email',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify(this.state),
        })
        .then(res => res.json())
        .then(
          res => this.setState({ snackbarmessage: res.message }),
        )
        .then(
          () => this.setState({ isLoading: false })
        )
        .then(
          () => this.setState({ asLoading: true })
        )
    }
  }

  RecaptchapLoader() {
    console.log('capcha successfully loaded');
  }
  // handleSubscribe(){
  //     if (this.state.isVerified){
  //         alert('You have successfully subscribed!');
  //     }else{
  //         alert('Please verify that you are a humain!');
  //     }
  // }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      })
    }
  }
  // Fin envoie email newsletter


  render() {
    return (
      (this.state.load &&
        <div>

          <footer>

            <div className="footer dsk-12 tab-12 mob-12">

              {/*  Civilités footer */}

              <div className=" blueDiv dsk-3 tab-3 mob-12" >
                <img className=" blueDiv dsk-2 tab-2 mob-12" src="../../images/FarmViz.png" alt="societe" />
                <p className=" blueDiv ">{this.state.trad_accueil[0].footer_titre}</p>
                <p className=" blueDiv ">{this.state.trad_accueil[0].footer_telephone}</p>
                <a href="mailto:contact@farmviz.fr">{this.state.trad_accueil[0].footer_email}</a>
              </div>

              {/* Fin Civilités footer */}
              {/* Liens footer */}

              <div className="blueDiv  dsk-3 tab-3 mob-12" >
                <a className="btn-navbar white dsk-3 tab-2" href="/  ">{this.state.trad_accueil[0].nav_accueil}</a>|
                 <a className="btn-navbar white dsk-3 tab-2" href="/services">{this.state.trad_accueil[0].nav_services}</a>|
                 <a className="btn-navbar white dsk-3 tab-2" href="/societes">{this.state.trad_accueil[0].nav_societes}</a>|
                 <a className="btn-navbar white dsk-3 tab-2" href="/contact">{this.state.trad_accueil[0].nav_contact}</a>
              </div>

              {/* Fin Liens footer */}
              {/* Newsletter footer */}

              <form className=" blueDiv  dsk-3 tab-3 mob-12" onSubmit={this.handleSubmit} >
                <div className=" blueDiv  dsk-8 tab-8 mob-12" >

                  <p className=" blueDiv dsk-2 tab-2 mob-12">{this.state.trad_accueil[0].footer_newsletter_titre}</p>
                  <p className=" blueDivFooter ">{this.state.trad_accueil[0].footer_newsletter_texte}</p>
                  <input type="text" name="email" className="input_newsletter_footer dsk-10 tab-2 " placeholder={this.state.trad_accueil[0].footer_newsletter_placeholder} onChange={this.handlerChange} />
                  <input type="button" className="button_orange" type="submit" value="ok" />
                  <Recaptcha
                    sitekey="6LcjTcQUAAAAAEa4n2XWWANTPERrWZQBO071ZJrA"
                    render="explicit"
                    hl="fr"
                    onloadCallback={this.RecaptchapLoader}
                    verifyCallback={this.verifyCallback}
                  />
                </div>


              </form>

              {/* Fin Newsletter footer */}
              {/* Reseaux Sociaux footer */}

              <div className="blueDiv dsk-3 tab-3 mob-12" >
                <p className="blueDiv ">{this.state.trad_accueil[0].footer_reseau}</p>
                <a href="https://www.facebook.com/FarmVizFr/"><img className="socialNetwork " src="../../images/fb.png" alt="facebook" /> </a>
                <a href="https://www.linkedin.com/company/farmviz/"><img className="socialNetwork off-0" src="../../images/linkedin.png" alt="linkedin" /></a>
                <a href="https://twitter.com/farmviz?lang=fr"><img className="socialNetwork off-0" src="../../images/twitter.png" alt="twitter" /></a>

              </div>

              {/* Fin Reseaux Sociaux footer */}

            </div>

            {/* Fin du footer */}
            {/* Banniere footer */}

            <div className="greenDiv dsk-12 tab-12 " >
              <p className=" greenDiv dsk-12 tab-12 banniere_footer">{this.state.trad_accueil[0].footer_banniere}</p>
            </div>

            {/* Fin Banniere footer */}

          </footer>
        </div>
      )
    )
  }
}

export default Footer;
