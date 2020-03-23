// Bloc affichant un formulaire de contact

import React, { Component } from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './ContactBlock.css';
import Recaptcha from 'react-google-invisible-recaptcha';

const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;



class ContactBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastname: '',
            email: '',
            description: '',
            object: '',
            isSent: false,
            loading: false,
            formErrors: {
                email: '',
                lastname: '',
                description: '',
                object: '',
            },
            lastnamevalid: false,
            emailvalid: false,
            descriptionvalid: false,
            objectvalid: false,
            formvalid: false,
            captcha: false,
            contactData: [],
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
    validateField(fieldname, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailvalid = this.state.emailvalid;
        let lastnamevalid = this.state.lastnamevalid;
        let descriptionvalid = this.state.descriptionvalid;
        let objectvalid = this.state.objectvalid;

        switch (fieldname) {
            case 'lastname':
                lastnamevalid = value.length > 0;

                fieldValidationErrors.lastname = lastnamevalid
                    ? ''
                    : '* Champ requis.';
                break;

            case 'email':
                emailvalid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailvalid ? '' : '* email non valide.';
                break;

            case 'description':
                descriptionvalid = value.length > 0;
                fieldValidationErrors.description = descriptionvalid ? '' : '* Champ requis.';
                break;

            case 'object':
                objectvalid = value.length > 0;

                fieldValidationErrors.object = objectvalid
                    ? ''
                    : '* Champ requis.';
                break;

            default:
                break;
        }
        this.setState(
            {
                formErrors: fieldValidationErrors,
                emailvalid: emailvalid,
                lastnamevalid: lastnamevalid,
                descriptionvalid: descriptionvalid,
                objectvalid: objectvalid,
            },
            this.validateForm
        );
    }

    validateForm() {
        this.setState({
            formvalid:
                this.state.emailvalid &&
                this.state.lastnamevalid &&
                this.state.descriptionvalid &&
                this.state.objectvalid

        });
    }

    //début fonction
    handleContactSubmit = event => {
        event.preventDefault();
        //errors

        let fieldValidationError = this.state.formErrors;

        fieldValidationError.lastname = this.state.lastnamevalid
            ? ''
            : '* Champ requis.';

        fieldValidationError.object = this.state.objectvalid
            ? ''
            : '* Champ requis.';

        fieldValidationError.email = this.state.emailvalid
            ? ''
            : '* email non valide.';

        fieldValidationError.description = this.state.descriptionvalid
            ? ''
            : 'Votre message est vide.';



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
            this.state.lastnamevalid &&
            this.state.emailvalid &&
            this.state.objectvalid &&
            this.state.descriptionvalid
        ) {
            const { lastname, email, description, object } = this.state;

            if (this.state.captcha) {
                this.setState({ loading: true });
                fetch(SERVER_ADDRESS + '/contact', {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        lastname: lastname,
                        email: email,
                        description: description,
                        object: object,
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
                        this.setState({ lastname: '' });
                        this.setState({ email: '' });
                        this.setState({ description: '' });
                        this.setState({ object: '' });



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

        const { lastname, email, description, object } = this.state;

        return (

            // conteneur du bloc contact et du bloc texte
            <div className="dsk-12 tab-12 mob-12 row contactContainer">

                {/* conteneur bloc de gauche (texte) */}
                <div className="dsk-6 tab-12 mob-12 column alignItemFlexEnd contactTextContainer">
                    <div className="column justContCenter alignItemCenter ">
                        <h4>DO YOU NEED A FARMVIZ SOLUTION FOR</h4>
                        <h1>VENTILATION?</h1>
                        <p>Prepare your credit card</p>
                    </div>
                </div>

                <div className="dsk-6 tab-12 mob-12 column contactFormContainer">
                    <form className="dsk-6 tab-12 mob-12 column" onSubmit={this.handleContactSubmit}>
                        <div className="dsk-12 tab-12 mob-12 row contactNameAndMailContainer">
                            <div className="dsk-5 tab-7 mob-10 column">

                                <div className="inputText ">
                                    Nom{''}
                                    <span>{this.state.formErrors.lastname}</span>
                                </div>
                                <input
                                    type="text"
                                    name="lastname"
                                    value={lastname}
                                    onChange={this.handleChangeContact} />
                            </div>
                            <div className="dsk-5 tab-7 mob-10 column">
                                <div className="inputText font">
                                    Email{''} <span>{this.state.formErrors.email}</span>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChangeContact} />
                            </div>

                        </div>
                        <label>Sujet de votre message</label>
                        <input
                            type="text"
                            name="object"
                            value={object}
                            onChange={this.handleChangeContact}
                            className="tab-7 mob-10" />

                        <div className="inputText font mt-2">
                            Message{' '}
                            <span>{this.state.formErrors.description}</span>
                        </div>
                        <textarea className="tab-7 mob-10"
                            name="description"
                            value={description}
                            onChange={this.handleChangeContact} />
                        <input
                            type="submit"
                            value={
                                this.state.loading
                                    ? 'Envoi en cours...'
                                    : 'Envoyer'
                            } />

                        <div className="Captcha">
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
                </div>


            </div>


        )
    }
}


export default ContactBlock;