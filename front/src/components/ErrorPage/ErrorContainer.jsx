// modèle de page d'erreur 
// une page d'erreur pour tous les codes d'erreur


import React from "react";
import './ErrorContainer.css'
import '../Css/Global.css';
import '../Css/Grid.css';

class ErrorContainer extends React.Component {
    constructor(props) {
        super(props);

        // différents code d'erreur possible
        this.state = {
            error: [400, 401, 402, 403, 404, 405, 500],

        

        }
    }
    render() {
        return (

            // conteneur page d'erreur
            <div className="dsk-12 tab-12 mob-12 error flex column">

                {/* Conteneur des textes */}
                <div className=" flex center height-error column">
                 
                    <h1 className="dsk-12 tab-12 mob-12  flex center colorblack size-error">Erreur {this.state.error[0]}</h1>
                    <h1 className="dsk-12 tab-12 mob-12 flex center colorblack">Page non trouvée</h1>
                </div>

                {/* conteneur du bouton */}
                <div className=" flex center margin-error">
                    <button className="dsk-12 tab-12 mob-12 b-width flex center colorblack"> <a href="/">Retour à l'accueil</a></button>
                </div>
            </div>
        );
    }
}

export default ErrorContainer;