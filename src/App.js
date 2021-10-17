import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//components import
import Main from "./components/Main";

//style import
import logo from './logo.svg';
import './App.css';
import Hexagon from "./components/animation/hexa/Hexagon";
import Eclipse from "./components/animation/eclipse/Eclipse";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null
        };
    }


    componentWillMount() {

    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Main/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
