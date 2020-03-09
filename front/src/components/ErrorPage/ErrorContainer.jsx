import React from "react";
import './ErrorContainer.css'
import '../Css/Global.css';
import '../Css/Grid.css';

class ErrorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: [400, 401, 402, 403, 404, 405, 500],

        

        }
    }
    render() {
        return (

            <div className="dsk-12 tab-12 mob-12 error flex column">
                <div className=" flex center height-error column">
                 
                    <h1 className="dsk-12 tab-12 mob-12  flex center colorblack size-error">Erreur {this.state.error[0]}</h1>
                    <h1 className="dsk-12 tab-12 mob-12 flex center">Page non trouvé</h1>
                </div>

                <div className=" flex center margin-error">
                    <button className="dsk-12 tab-12 mob-12 b-width flex center colorblack"> <a href="/">Retour à l'accueil</a></button>
                </div>
            </div>
        );
    }
}

export default ErrorContainer;