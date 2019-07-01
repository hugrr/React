import React from "react";
//import ReactDom from "react-Dom";
import PropTypes from "prop-types";

const numeroMayor = (A, B, C) => {
	return A > B && A > C ? A : B > C ? B : C > A ? C : A;
};

export const MayorNumero = props => {
	return (
		<div>
			el mayor es: {numeroMayor(props.valA, props.valB, props.valC)}
		</div>
	);
};

MayorNumero.propTypes = {
	valA: PropTypes.number,
	valB: PropTypes.number,
	valC: PropTypes.number
};
//ReactDOM.render(<MayorNumero A={6}B={5}c={4}/>);
