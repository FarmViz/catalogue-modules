            //Module menu accordéon


import React from "react";
import '../Accordéon/Accordéon.css';
import '../Css/Global.css';

class Accordéon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            // Conteneur de l'accordéon
            <div className="container-fluid">

                {/* Conteneur limitant la largeur du menu à 1024px en version bureau*/}
                <div className="max-long container">
                    
                    {/* Conteneur de la première rubrique de l'accordéon */}
                    <div className="accordion">

                        {/* titre de la rubrique numéro 1 */}
                        <label for="tm" className="accordionitem"><h2>Item 1 </h2></label>

                        {/* la checkbox permet de faire apparaître le contenu de la rubrique */}
                        <input type="checkbox" id="tm" />

                        {/* Contenu de la première rubrique de l'accordéon */}
                        <p className="hiddentext">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed  into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    </div>
                    {/* fin du Conteneur de la première rubrique de l'accordéon */}

                    {/* Conteneur de la deuxième rubrique de l'accordéon */}
                    <div className="accordion">

                        {/* titre de la rubrique numéro 2 */}
                        <label for="tn" className="accordionitem"><h2>Item 2 </h2></label>

                        {/* la checkbox permet de faire apparaître le contenu de la rubrique */}
                        <input type="checkbox" id="tn" />

                        {/* Contenu de la deuxième rubrique de l'accordéon */}
                        <p className="hiddentext">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    </div>
                    {/* fin du Conteneur de la deuxième rubrique de l'accordéon */}

                    {/* Conteneur de la troisième rubrique de l'accordéon */}
                    <div className="accordion">

                        {/* titre de la rubrique numéro 3 */}
                        <label for="to" className="accordionitem"><h2>Item 3 </h2></label>

                        {/* la checkbox permet de faire apparaître le contenu de la rubrique */}
                        <input type="checkbox" id="to" />

                        {/* Contenu de la troisième rubrique de l'accordéon */}
                        <p className="hiddentext">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    </div>
                    {/* fin du Conteneur de la troisième rubrique de l'accordéon */}
                </div>

            </div>



        );
    }
}

export default Accordéon;