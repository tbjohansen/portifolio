import React from 'react';

//components import
import {Button} from "./common/Button";

//assets import

class Landing extends React.Component {
    //
    render() {

        return (
            <div className={"landingPage"}>
                <section className="container">
                    <div>
                        <div>
                            <span className="one h6"></span>
                            <span className="two h3"></span>
                        </div>
                    </div>


                    <div>
                        <div>
                            <span className="one h1"></span>
                            <span className="two h4"></span>
                        </div>
                    </div>


                    <div>
                        <div>
                            <span className="one h5"></span>
                            <span className="two h2"></span>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Landing;