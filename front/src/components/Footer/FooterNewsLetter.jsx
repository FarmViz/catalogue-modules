import React, { Component } from 'react';
import Recaptcha from 'react-google-invisible-recaptcha';
import '../Css/Global.css';
import '../Css/Grid.css';
import './FooterNewsLetter.css';

const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

class FooterNewsLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isSent: false,
            loading: false,
            formErrors: {
                email: ''
            },
            emailvalid: false,
            formvalid: false,
            captcha: false,
            contactData: []
        };
    }

    // rentre les données dans le state
    handleChangeContact = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value }, () => {
            this.validateField(name, value);
        });
    };

    // vérifie les données entrées
    validateField(fielname, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailvalid = this.state.emailvalid;

        switch (fielname) {
            case 'email':
                emailvalid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailvalid ? '' : '* email non valide.';
                break;
            default:
                break;
        }
        this.setState(
            {
                formErrors: fieldValidationErrors,
                emailvalid: emailvalid
            },
            this.validateForm
        );
    }

    validateForm() {
        this.setState({
            formvalid:
                this.state.emailvalid
        });
    }

    //début fonction
    handleContactSubmit = event => {
        event.preventDefault();
        //errors

        let fieldValidationError = this.state.formErrors;

        fieldValidationError.email = this.state.emailvalid
            ? ''
            : '* email non valide.';


        this.setState({ formErrors: fieldValidationError });

        // execution du captcha
        this.recaptcha.execute();

        //fetch sendMail
    };

    // le captcha appelle cette fonction après vérification, on exécute onFetch('envoie de mail)
    onResolved = () => {
        this.setState({ captcha: true }, this.onFetch);
    };

    // envoi de mail
    onFetch = () => {
        if (
            this.state.emailvalid

        ) {
            const { email } = this.state;

            if (this.state.captcha) {
                this.setState({ loading: true });
                fetch(SERVER_ADDRESS + '/contact', {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        email: email
                    })
                }).then(res => {
                    if (res.ok) {
                        // message de confirmation
                        this.setState({ isSent: true }, () => {
                            setTimeout(() => {
                                this.setState({ isSent: false });
                            }, 5000);
                        });

                        // Reset

                        this.setState({ loading: false });
                        this.setState({ captcha: false });
                        this.setState({ email: '' });
                        return res.json();
                    } else {
                        return res.text().then(text => {
                            throw new Error(text);
                        });
                    }
                });
            }
        }
    };

    //fin fonction

    render() {
        const { email } = this.state;
        return (
            /* Newsletter */
            <section className="section3 dsk-4 tab-3 mob-12 center column blueDiv" onSubmit={this.handleContactSubmit} >
                <form className="section_newsletter dsk-12 tab-12 mob-12  column blueDiv"  >
                    <div className="footer_newsletter_titre  dsk-12 tab-12 mob-12 blueDiv"><h4 className="paddingh2">NEWSLETTER</h4></div>
                    <div className="footer__newsletter_text  dsk-12 tab-12 mob-12 blueDiv"><p className="paddingh2">Suivez-nous</p></div>
                    <div className="newsletter_input_button dsk-12 tab-12 mob-12 row blueDiv">
                        <div className="footer_newsletter_input  dsk-7  off-tab-1 tab-9 off-mob-1 mob-9 ">
                            <span>{this.state.formErrors.email}</span>
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={this.handleChangeContact}
                                className="input_form"
                            />

                        </div>
                        <div className="footer_newsletter_bouton dsk-1 tab-2 mob-2 blueDiv">
                            <input
                                type="submit"
                                value={
                                    this.state.loading
                                        ? 'Envoi en cours...'
                                        : 'Envoyer'
                                }
                                className="button_orange"
                            />
                        </div>
                        <Recaptcha
                            ref={ref => (this.recaptcha = ref)}
                            sitekey="6LfSX9YUAAAAAHGi5gUy5NetwOCc0SQe_1YBK8vC"
                            onResolved={this.onResolved}
                        />

                    </div>
                    <div
                        className={
                            this.state.isSent ? 'alert alert-success' : 'd-none'
                        }
                    >
                        {this.state.isSent ? 'Message envoyé!' : ''}
                    </div>
                </form>
            </section >


        )
    }
}


export default FooterNewsLetter;
