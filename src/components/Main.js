import React from 'react';
import {connect} from "react-redux";

//actions import

//components import
import Cover from "./Cover";
import Hexagon from "./animation/hexa/Hexagon";
import Eclipse from "./animation/eclipse/Eclipse";

//assets import


class Main extends React.Component{

    render() {
        return (
            <div>
                {/*<Cover/>*/}
                <Hexagon/>
            </div>
        );
    }
}

export default Main;