            /****COMPOSANT FOOTER TYPE ****/
            /*****************************/



import React, { Component } from 'react';
import './FooterV2.css';
import '../Css/Global.css';



class FooterV2 extends Component {


  render() {
    return (

      <>
      {/*--------- Footer ----------*/}

        {/* Conteneur occupant la totalité de la largeur en version bureau et le fond bleu */}
        <div className="dsk-12 tab-12 mob-12 blueDiv">

          {/* Conteneur limitant la largeur du contenu du footer à 1024px en version bureau */}
          <div className="container dsk-12 tab-12 mob-12 max-width footerContainer">

            {/* balise ouvrant et fermant le footer */}
            <footer className="footer-bs">

              {/* div initialisant la flex box et alignant les différentes parties du footer en ligne */}
              <div className="row">

                {/* div contenant la première colonne logo et texte  */}
                <div className="col-md-3 footer-brand animated fadeInLeft">
                  <h2 className="footerLogo">FarmViz</h2>
                  <p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p>
                  <p>© 2014 BS3 UI Kit, All rights reserved</p>
                </div>

                {/* deuxième colonne contenant le menu du footer */}
                <div className="col-md-4 footer-nav animated fadeInUp  column">

                  {/* div contenant le titre et définissant son padding */}
                  <div className="pl-3">
                    <h4>Menu —</h4>
                  </div>

                  {/* div contenant les 2 blocs menus et les mettant en ligne*/}
                  <div className="d-flex">

                    {/* div contenant les liens vers les pages principales du site */}
                    <div className="col-md-6">
                      <ul className="pages">
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Société</a></li>
                        <li><a href="#">Contact</a></li>
                        {/* <li><a href="#">Advice</a></li> */}
                      </ul>
                    </div>

                    {/* div contenant les liens vers les pages secondaires du site */}
                    <div className="col-md-6">
                      <ul className="list">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Terms &amp; Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* div contenant la section "folow us" du footer */}
                <div className="col-md-2 col-sm-6 footer-social animated fadeInDown">
                  <h4>Follow Us</h4>

                  {/* liste des liens vers les réseaux sociaux */}
                  <ul className="followUs">
                    <li><a href="https://fr-fr.facebook.com/FarmVizFr/">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">RSS</a></li>
                  </ul>
                </div>


                {/* div contenant la section "News Letter" du footer */}
                <div className="col-md-3 col-sm-6 footer-ns animated fadeInRight">
                  <h4>Newsletter</h4>
                  <p className="yellowText">Abonnez vous à nos dernières actualités</p>

                  {/* paragraphe vide créant un espace entre le texte et l'input */}
                  <p></p>

                  {/* div contenant l'input et le bouton submit */}
                  <div className="input-group">

                    {/* input permettant d'entrer son adresse mail */}
                    <input type="text" className="newsMail" placeholder="mail@mail.com" />

                    {/* bouton contenant l'icone d'envoi */}
                      <button className="btn btn-default newsButton" type="button"><i className="glyphicon ">&#x1F4E7; </i></button>
                    
                  </div>{/* /input-group */}

                {/* fin de la section "News Letter" */}
                </div>

                {/* fin de la flex box row contenant les éléments du footer */}
              </div>
            </footer>
            
          {/* Conteneur limitant la largeur du contenu du footer à 1024px en version bureau */}
          </div>

          {/* fin du Conteneur occupant la totalité de la largeur en version bureau et le fond bleu */}
        </div>



      </>



    )
  }
}

export default FooterV2;