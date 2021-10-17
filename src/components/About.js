import React from 'react';

//components import
import {Button} from "./common/Button";

//assets import
import P2018 from '../assests/images/P2018.jpg';

class About extends React.Component {
    //
    render() {

        return (
            <div className={"about"}>
                <div className={"about-details"}>
                    <h4>About Me</h4>
                    <p>
                        Hello! My name is Thomasi and I enjoy creating things that live on the internet.
                        My interest in software development started back in 2016 when I decided to try editing custom Blogger themes.
                    </p>
                    <br/>
                    <p>
                        Fast-forward to today, and I've the privilege of working at a tech start-up and also i do freelancing. My main focus these days is building accessible,
                        inclusive products and digital experiences for a variety of clients.
                    </p>
                    <br/>
                    <p>
                        Here are a few technologies I’ve been working with recently:
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li> Flutter</li>
                        <li>Node.js</li>
                        <li>Firebase</li>
                    </p>
                </div>
                <div className={"about-image"}>
                    <img src={P2018} alt={'me'}/>
                </div>
            </div>
        );
    }
}

export default About;