import React from "react";
import ReactDOM from "react-dom";
import Approut from "./Approut";

import './generalStyle.css'

const App=()=>{
    return(
        <div>
        <Approut></Approut>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));