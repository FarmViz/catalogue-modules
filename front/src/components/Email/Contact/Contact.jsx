import React, { Component } from 'react';
import Recaptcha from 'react-google-invisible-recaptcha';
import Navbar from "../../Navbar/Navbar";
import Footer from '../../Footer/Footer';
import './Contact.css';
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            nom: "",
            prenom: "",
            telephone: "",
            email: "",
            description: "",
            asLoading: false
        }
        this.handlerChange = this.handlerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // captcha
        this.onSubmit = this.onSubmit.bind( this );
        this.onResolved = this.onResolved.bind( this );
        // fin captcha
    }
    handlerChange(event) {
        console.log(event.target.name);
        switch (event.target.name) {
            case 'Nom':
                this.setState({ nom: event.target.value });
                break;
            case 'Prenom':
                this.setState({ prenom: event.target.value });
                break;
            case 'telephone':
                this.setState({ telephone: event.target.value });
                break;
            case 'email':
                this.setState({ email: event.target.value });
                break;
            case 'description':
                this.setState({ description: event.target.value });
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
        // if (this.state.recaptcha.execute()) {
      {
            this.setState({ isLoading: true })
            console.log(this.state)
            fetch(SERVER_ADDRESS + '/contact',
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
    // }
    }

    onSubmit() {
        if ( '' == this.state.nom ) {
          alert( 'Erreur de validation! Renseigné les champs obligatoires.' );
          this.recaptcha.reset();
        } else {
          this.recaptcha.execute();
        }
      }
      onResolved() {
        alert( 'Recaptcha response du captcha: ' + this.recaptcha.getResponse() );
      }
  
    render() {
        return (
            <div className="sticky-wrap">
                <Navbar />
                <div className="formulaire">
                    <form className="container align-containner-recrutement" onSubmit={this.handleSubmit}>
                        <div className="max-wi">

                            <div className="center-we-join"><h1>Nous contacter</h1></div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Nom</div>
                                    </div>
                                    <input type="text" name="Nom" placeholder="Nom" className="form-control" onChange={this.handlerChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Prénom</div>
                                    </div>
                                    <input type="text" name="Prenom" placeholder="Prenom" className="form-control" onChange={this.handlerChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Téléphone</div>
                                    </div>
                                    <input type="text" name="telephone" className="form-control" placeholder="numéro de téléphone" onChange={this.handlerChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Email</div>
                                    </div>
                                    <input type="email" name="email" className="form-control" placeholder="exemple@email.fr" onChange={this.handlerChange} />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-group-text">Message</div>
                                <textarea name="description" className="form-control" id="exampleFormControlTextarea1" placeholder="Description de votre message" rows="3" onChange={this.handlerChange}></textarea>
                            </div>
                            <div className="captcha row justify-content-center">
                            <Recaptcha
                               ref={ ref => this.recaptcha = ref }
                               sitekey="6LfoYdkUAAAAACtar5gBLA7VWg5r-gmxZ-ydwk1o"
                               onResolved={ this.onResolved }
                             />
                            </div>
                          
                             <button className="btn-envoyer btn btn-primary" type="submit" onClick={this.onSubmit}>Envoyer</button>

                        </div>
                    </form>
                </div>
                <div className="sticky-footer">
                    <Footer />
                </div>
            </div >
        )
    }
}

export default Contact;
