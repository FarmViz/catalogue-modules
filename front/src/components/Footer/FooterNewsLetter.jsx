import React, { Component } from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './FooterNewsLetter.css';

class FooterNewsLetter extends Component {

    render() {
        return (

            <section className="section3 dsk-4 tab-3 mob-12 center column blueDiv" >
                <form className="section_newsletter dsk-12 tab-12 mob-12  column blueDiv"  >
                    <div className="footer_newsletter_titre  dsk-12 tab-12 mob-12 blueDiv"><h4 className="paddingh2">NEWSLETTER</h4></div>
                    <div className="footer__newsletter_text  dsk-12 tab-12 mob-12 blueDiv"><p className="paddingh2">Suivez-nous</p></div>
                    <div className="newsletter_input_button dsk-12 tab-12 mob-12 row blueDiv">
                        <div className="footer_newsletter_input  dsk-7  off-tab-1 tab-9 off-mob-1 mob-9 "><input type="text" name="email" className="input_newsletter" /></div>
                        <div className="footer_newsletter_bouton dsk-1 tab-2 mob-2 blueDiv"><button className="" type="submit" value="ok" >Ok</button></div>
                        {/* <div className="captcha row justify-content-center blueDiv" >
                                     <Recaptcha
                                       sitekey="6LcjTcQUAAAAAEa4n2XWWANTPERrWZQBO071ZJrA"
                                       render="explicit"
                                       hl="fr"
                                       onloadCallback={this.RecaptchapLoader}
                                       verifyCallback={this.verifyCallback}
                                     />
                                   </div> */}
                    </div>
                </form>
            </section >


        )
    }
}


export default FooterNewsLetter;
