import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import Navbar from "../../Navbar/Navbar";
import Footer from '../../Footer/Footer';
 import UploadImg from '../../Upload/UploadFile';
import './Recrutement.css';
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

class Recrutement extends Component {
    constructor() {
        super();
        this.state = {
            nom: "",
            prenom: "",
            telephone: "",
            email: "",
            description: "",
            file: null,
            filename: "",
            isLoading: false,
            asLoading: false,
            isVerified: false,
            selectCV: null,
            selectLetter: null,

        }
        this.handlerChange = this.handlerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // captcha
        this.verifyCallback = this.verifyCallback.bind(this);
        this.RecaptchapLoader = this.RecaptchapLoader.bind(this);
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
            case 'file':
                if (event.target.files && event.target.files.length > 0) {
                    console.log(event.target.files[0]);
                    this.setState(
                        {
                            file: event.target.files[0],
                            filename: event.target.files[0].name
                        }
                    );

                }
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
        if (this.state.isVerified && this.state.selectLetter !== null && this.state.selectCV !== null) {

            this.setState({ isLoading: true });

            const data = new FormData();
            data.append("file", this.state.selectCV);
            console.log(this.state.selectCV);
            // on uploade d'abord le CV
            fetch(SERVER_ADDRESS + '/uploadrecru', {
                method: 'Post',
                mode: "cors",
                credentials: "same-origin",
                redirect: "follow",
                referrer: "no-referrer",
                body: data
            })
                .then(res => {
                    if (res.ok) {
                        // on uploade ensuite la lettre
                        const data = new FormData();
                        data.append("file", this.state.selectLetter);
                        console.log(this.state.selectLetter)
                        fetch(SERVER_ADDRESS + '/uploadrecru', {
                            method: 'Post',
                            mode: "cors",
                            credentials: "same-origin",
                            redirect: "follow",
                            referrer: "no-referrer",
                            body: data
                        }).then(res => {
                            if (res.ok) {
                                //Puis on envoie l'email
                                const emailData = {
                                    nom: this.state.nom,
                                    prenom: this.state.prenom,
                                    telephone: this.state.telephone,
                                    email: this.state.email,
                                    description: this.state.description,
                                    cv: this.state.selectCV.name,
                                    letter: this.state.selectLetter.name
                                };
                                fetch(SERVER_ADDRESS + '/recrutement',
                                    {
                                        method: 'POST',
                                        headers: new Headers({
                                            'Content-Type': 'application/json'
                                        }),
                                        body: JSON.stringify(emailData),
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
                        );
                    }
                });
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

    expiredCallback = () => {
        this.setState({ isVerified: false })
    }

    updateCvFile = (file) => {
        this.setState({ selectCV: file });
    }

    updateLetterFile = (file) => {
        this.setState({ selectLetter: file });
    }

    render() {
        console.log(this.state)
        return (
            <div className="sticky-wrap">
                <Navbar />
                <div className="formulaire">
                    <form className="container align-containner-recrutement" onSubmit={this.handleSubmit}>
                        {/* civilite du client */}
                        <div className="max-wi">
                            <div className="center-we-join"><strong>Nous rejoindre</strong></div>
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

                            <div className="size-txt-cv-lettre">
                                <p>Importer votre cv et votre lettre de motivation :</p>
                            </div>

                            <UploadImg updateCvFile={this.updateCvFile} updateLetterFile={this.updateLetterFile} />
                            <div className="form-group">
                                <div className="input-group-text">Message</div>
                                <textarea name="description" className="form-control" id="exampleFormControlTextarea1" placeholder="Description de votre message" rows="3" onChange={this.handlerChange}></textarea>
                            </div>
                            <div className="captcha row justify-content-center">
                                <Recaptcha
                                    sitekey="6LcjTcQUAAAAAEa4n2XWWANTPERrWZQBO071ZJrA"
                                    render="explicit"
                                    hl="fr"
                                    onloadCallback={this.RecaptchapLoader}
                                    verifyCallback={this.verifyCallback}
                                    expiredCallback={this.expiredCallback}
                                />
                            </div>
                            {this.state.isLoading ?
                                <div className="d-block text-center pb-4" disabled>
                                    <button className="btn btn-primary" type="submit">Envoie de votre candidature en cours...</button>
                                </div> :
                                <div className="d-block text-center pb-4">

                                    <button className="btn-envoyer btn btn-primary" type="submit" >Envoyer</button>

                                </div>
                            }
                            {this.state.asLoading ?
                                <div className="alert alert-success" role="alert">
                                    {this.state.snackbarmessage}
                                </div>
                                :
                                ""
                            }
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

export default Recrutement;
