import React, {Component} from 'react';
import '../Css/Global.css';
import '../Css/Grid.css';
import './TopBanner.css';



class TopBanner extends Component {

    render () {

        return(
            <>
                <div className="dsk-12 tab-12 mob-12 row txt">
                   
                   <div className="dsk-6 tab-6 mob-12 greenDiv second punchline"><p>La technologie au service de l'environnement</p></div>
                   <div className="dsk-6 tab-6 mob-12 greenDiv third serviceClient"><p>Service Client 6j/7 de 7h à 21h 02 23 23 52 18</p></div>
               </div>


            </>
        )
    }
}




export default TopBanner;

