import React from "react";
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer_parent">
                <div className="block1">
                    <p>LOGO</p>
                  <p>CONTACTEZ-NOUS</p>
                  <p>0234343434</p>
                  <p>Contact@farmviz.fr</p>
                </div>
                <form action="submit">
                    <div className="newsletter_parent">
                        <p>Newslatter :</p>
                        <p>Abonnez-vous à nos dernières actualités</p>
                        <div> <input type="text" /> <input type="button" value="ok" /></div>
                    </div>
                </form>
                <div className="block2">
                    <p>REJOIGNEZ-NOUS</p>
                    <a className="linkfoot" href="/">Fb</a>
                    <a className="linkfoot" href="/apropos">Twitter</a>
                    <a className="linkfoot" href="/mentions">Linkedin</a>
                </div>
                <div className="block-footer2">
                    <a className="linkfoot" href="/">Accueil</a>
                    <a className="linkfoot" href="/apropos">Services</a>
                    <a className="linkfoot" href="/mentions">Société</a>
                    <a className="linkfoot" href="/contact">Contact</a>
                </div>
            
<div className="banniere_footer">
  test ici 
</div>
</div>
        )
    }
}

export default Footer;