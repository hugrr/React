//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Numeromayor } from "./component/numeromayor";

//render your react application
ReactDOM.render(
	<Numeromayor A={5} B={4} C={6} />,
	document.querySelector("#app")
);
