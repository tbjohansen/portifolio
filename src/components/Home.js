import React from 'react';

//components import
import {Button} from "./common/Button";

//assets import
import Dev from '../assests/web_dev.svg';

class Home extends React.Component {
    //
    render() {

        return (
            <div className={"home"}>
               <div>
                   <h4>Hi, my name is</h4>
                   <h2>Thomasi Johansen.</h2>
                   <h2>I build mobile and web apps.</h2>
                   <p>
                       I’m a software developer specializing in building (and occasionally designing) exceptional digital experiences.
                       Currently, I’m focused on building accessible, human-centered products at <a href={"www.firm23.co.tz"}>Firm 23.</a>
                   </p>
                   <Button
                       text={"Check out my work"}
                   />
               </div>
                <div>
                    <img src={Dev} alt={'web_dev'}/>
                </div>
            </div>
        );
    }
}

export default Home;