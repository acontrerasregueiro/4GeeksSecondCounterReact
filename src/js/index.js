//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
//import your own components
import { Contador } from "./component/contador.jsx";
// include your styles into the webpack bundle
import "../styles/index.css";
import Home from "./component/home.jsx";

//render your react application
let contador = 0;
setInterval(() => {
	ReactDOM.render(
		<Contador segundos={contador} />,
		document.querySelector("#app")
	);
	contador = contador + 1;
}, 1000);
//ReactDOM.render(<Home />, document.querySelector("#app"));
