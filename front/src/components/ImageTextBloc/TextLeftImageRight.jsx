import React, {Component} from 'react';
import './BlockImagetext.css';

class BlocTxtLeftImgRight extends Component {

    render() {

        return(
            <section className="dsk-10 tab-12 mob-12 BlocImgTxt row">
                <img className="dsk-2 tab-4 mob-4 ImgBlock" src="/images/graphic.png" alt="appli" />
                <article className="dsk-8 tab-8 mob-12">
                    <h1 className="blockTxtArticle">Titre</h1>
                    <p className="blockTxtArticle">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </article>
            </section>

        )
    }
}

export default BlocTxtLeftImgRight;