import React from "react";
// import './Footer.css'
import '../Css/Grid.css';
import '../Css/Global.css';
import FooterNewsLetter from "./FooterNewsLetter";
import FooterLinks from "./FooterLinks";
import FooterBanner from "./FooterBanner";
import FooterContact from "./FooterContact";
import FooterSocialNetwork from "./FooterSocialNetwork";
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;


class Footer extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         trad_accueil: [],
    //         email: "",
    //         load: false,
    //         isLoading: false,
    //         asLoading: false,
    //         isVerified: false
    //     }
    //     {
    //         //      Fetch
    //         fetch(SERVER_ADDRESS + '/trad_accueil')
    //             .then(res => res.json())
    //             .then(res => this.setState({ trad_accueil: res }, () => this.setState({ load: true })))

    //         // captcha
    //         // this.verifyCallback = this.verifyCallback.bind(this);
    //         // this.RecaptchapLoader = this.RecaptchapLoader.bind(this);
    //         // // fin captcha
    //     }
    //     // FIN DU fetch


    //     // Envoie du mail pour la newsletter
    //     this.handlerChange = this.handlerChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);


    // }

    // handlerChange(event) {
    //     console.log(event.target.name);
    //     switch (event.target.name) {
    //         case 'email':
    //             this.setState({ email: event.target.value });
    //             break;
    //         default:
    //             break;
    //     }
    // }
    // snackbarClose = (event) => {
    //     this.setState({ snackbaropen: false })
    // }
    // handleSubmit(event) {
    //     event.preventDefault();
    //     // if (this.state.isVerified) {
    //     {
    //         this.setState({ isLoading: true })
    //         console.log(this.state)
    //         fetch(SERVER_ADDRESS + '/news_email',
    //             {
    //                 method: 'POST',
    //                 headers: new Headers({
    //                     'Content-Type': 'application/json'
    //                 }),
    //                 body: JSON.stringify(this.state),
    //             })
    //             .then(res => res.json())
    //             .then(
    //                 res => this.setState({ snackbarmessage: res.message }),
    //             )
    //             .then(
    //                 () => this.setState({ isLoading: false })
    //             )
    //             .then(
    //                 () => this.setState({ asLoading: true })
    //             )
    //     }
    // }

    // RecaptchapLoader() {
    //     console.log('capcha successfully loaded');
    // }
    // // handleSubscribe(){
    // //     if (this.state.isVerified){
    // //         alert('You have successfully subscribed!');
    // //     }else{
    // //         alert('Please verify that you are a humain!');
    // //     }
    // // }

    // verifyCallback(response) {
    //     if (response) {
    //         this.setState({
    //             isVerified: true
    //         })
    //     }
    // }
    // // Fin envoie email newsletter
    render() {
        return (
            //  (this.state.load &&
            <div className="dsk-12 tab-12 mob-12 row ">

                <div className="dsk-12 tab-12 mob-12 row alignCenter blueDiv">

                    <FooterContact />

                    {/* section 2  liens page*/}
                    <FooterLinks />

                    {/* section 3 Newsletter*/}
                    <FooterNewsLetter />

                    {/* section 4  Reseaux sociaux */}
                    <FooterSocialNetwork />
                    
                </div>

                {/* section 5  Banniere inferieur */}
                <FooterBanner />
            </div >
        )
        // )
    }
}

export default Footer;