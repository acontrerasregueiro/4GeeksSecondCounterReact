//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { Contador } from "./component/contador.jsx";
//import Y, { ExFunc1, ExFunc2, etc... } from 'module';
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Contador from "./component/contador.jsx";
//import Home from "./component/home.jsx";
//ReactDOM.render(<Home />, document.querySelector("#app"));
//render your react application
ReactDOM.render(<Contador />, document.querySelector("#app"));
