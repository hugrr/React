import React from "react";
import PropTypes from "prop-types";

export class Numeromayor extends React.Component {
	constructor(props) {
		super(props);

		numeroMayor = (A, B, C) => {
			return A > B && A > C ? A : B > C ? B : C > A ? C : A;
		};

		render();
		{
			return (
				<div>
					el mayor es:
					{numeroMayor(props.A, props.B, props.C)}
				</div>
			);
		}
	}
}
