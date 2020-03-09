import React , {Component} from 'react';
import { render } from 'react-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
// import 'normalize.css/normalize.css';
import './Carrousel.css';
import '../Css/Global.css';
import '../Css/Grid.css';


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

            <div className="max-width dsk-12 tab-12 mob-12">
            
            <div className="wrapper ">
                <h1 className="CarrouselTitle">Titre Carrousel</h1>
                
            </div>
            <Slider className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <h2>{item.subtitle}</h2>
                            <p>{item.description}</p>
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