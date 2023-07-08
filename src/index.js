import React from "react";
import ReactDom from 'react-dom';
import App from "./App";

function Apps()
{
    return(
        <App />
        )

}
ReactDom.render(<App  />,document.getElementById('root'));

