import React from 'react';

import './Hexagon.css';

class Hexagon extends React.Component {

    render() {

        return (
            <body>
            <div className="container">
                <p>TJ</p>
                <div className={'parentDiv'}>
                    <div className={'childDiv'}>
                        <span className="one h6"></span>
                        <span className="two h3"></span>
                    </div>
                </div>


                <div className={'parentDiv'}>
                    <div className={'childDiv'}>
                        <span className="one h1"></span>
                        <span className="two h4"></span>
                    </div>
                </div>


                <div className={'parentDiv'}>
                    <div className={'childDiv'}>
                        <span className="one h5"></span>
                        <span className="two h2"></span>
                    </div>
                </div>
            </div>

            </body>
        );
    }
}

export default Hexagon;