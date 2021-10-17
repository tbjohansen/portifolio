import React from 'react';

//components import
import {Button} from "./common/Button";

//assets import
import Dev from '../assests/illustrations/web_dev.svg';
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";

class Cover extends React.Component {
    //
    render() {

        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li> About </li> <li> Experience </li> <li> Work </li> <li> Contact </li>
                        </ul>
                    </nav>
                </header>
                <div>
                    <Home/>
                </div>
                <div>
                    <About/>
                </div>
                <div>
                    <Experience/>
                </div>
            </div>
        );
    }
}

export default Cover;