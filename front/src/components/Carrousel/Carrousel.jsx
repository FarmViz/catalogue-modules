// Carousel avec titre et texte intégrés, 

//!! nécessite 'Slider' de 'react-animated-slider' !!

import React , {Component} from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Carrousel.css';
import '../Css/Global.css';
import '../Css/Grid.css';

//  Tableau comportant le contenu du carousel
const content = [
    {
        title: 'Vulputate Mollis Ultricies ',
        subtitle: 'sous-titre',
        description:
        'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
        button: 'Read More',
        image: 'https://i.imgur.com/ZXBtVw7.jpg',

    },
    {
        title: 'Tortor Dapibus Commodo Aenean Quam',
        subtitle: 'sous-titre',
        description:
        'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        button: 'Discover',
        image: 'https://i.imgur.com/DCdBXcq.jpg',

    },
    {
        title: 'Phasellus volutpat metus',
        subtitle: 'sous-titre',
        description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
        button: 'Buy now',
        image: 'https://i.imgur.com/DvmN8Hx.jpg',

    }
];




 class Carrousel extends Component {

    render(){

        return(
            // conteneur parent limitant la largeur à 1024px en version bureau
            <div className="max-width dsk-12 tab-12 mob-12">

            {/* div contenant le titre du carousel */}
            <div className="wrapper ">

                {/* titre du carousel */}
                <h1 className="CarrouselTitle">Titre Carousel</h1>
            {/* fin div contenant le titre du carousel */}
            </div>

            {/* le carousel en lui-même */}
            <Slider className="slider-wrapper">

                {/* fonction parcourant le tableau des données affichées dans le carousel */}
                {content.map((item, index) => (

                    // div affichant chaque image dont le lien figure dans le tableau
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >

                        {/* div affichant le titre et le texte apparaissant sur l'image */}
                        <div className="inner">

                            {/* le titre */}
                            <h1>{item.title}</h1>

                            {/* le sous-titre */}
                            <h2>{item.subtitle}</h2>

                            {/* le texte descriptif */}
                            <p>{item.description}</p>

                            {/* le call to action */}
                            <button>{item.button}</button>
                        </div>

                        
                    </div>
                ))}
            </Slider>
            
        </div>



        )
    }


    

    
 }


export default Carrousel;