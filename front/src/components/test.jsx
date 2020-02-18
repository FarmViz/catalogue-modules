import React, { Component } from 'react';
import './Css/Global.css';



class Test extends Component {



    render() {
        return (

            <>
                <div className="mob-12 tab-12 tabx-12 dsk-12  IntroductoryOfferContainer">

                    <h1>Arial- Black regular 36</h1>
                    <h2>Arial - Bold 30</h2>
                    <h3>Arial - Bold 24</h3>
                    <h4>Arial - Bold 20</h4>
                    <p className="texte18">Arial - regular 18</p>
                    <p className="texte14">Arial - regular 14</p>
                    <p className="texte24italic">Arial - italic  24</p>
                    <p className="texte10">Arial - regular 10</p>
                    <div className="greenDiv" style={{width:50 , height:50 + 'px'}}>test</div>
                    <div className="darkGreyDiv" style={{width:50 , height:50 + 'px'}}>test</div>
                    <div className="greyDiv" style={{width:50 , height:50 + 'px'}}>test</div>
                    <div className="blackDiv" style={{width:50 , height:50 + 'px'}}>test</div>
                    <div className="blueDiv" style={{width:50 , height:50 + 'px'}}>test</div>
                    <div className="lightBlueDiv" style={{width:50 , height:50 + 'px'}}>test</div>
                    <div className="yellowDiv" style={{width:50 , height:50 + 'px'}}>test</div>
                    <div className="orangeDiv" style={{width:50 , height:50 + 'px'}}>test</div>
                    <form className="greenDiv">
                        <input placeholder="texte" />
                        <button>Test Button</button>
                    </form>
                    <button>Test Button</button>
                    <div className="original_price_container">
                    <div className="prix_barre"></div>
                    <p classeName="original_price">149</p>
                    </div>
                </div>

            </>

        )
    }



}




export default Test;