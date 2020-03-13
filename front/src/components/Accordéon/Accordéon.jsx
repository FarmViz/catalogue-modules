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

            <div className="container-fluid">

                <div className="max-long container">

                    <div className="accordion">
                        <label for="tm" className="accordionitem"><h2>Item 1 </h2></label>
                        <input type="checkbox" id="tm" />
                        <p className="hiddentext">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed  into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    </div>

                    <div className="accordion">
                        <label for="tn" className="accordionitem"><h2>Item 2 </h2></label>
                        <input type="checkbox" id="tn" />
                        <p className="hiddentext">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    </div>

                    <div className="accordion">
                        <label for="to" className="accordionitem"><h2>Item 3 </h2></label>
                        <input type="checkbox" id="to" />
                        <p className="hiddentext">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    </div>
                </div>

            </div>



        );
    }
}

export default Accordéon;