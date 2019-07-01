import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = { color: "red" };
	}

	render() {
		return (
			<div className="container">
				<div className="red">a</div>
				<div className="yellow">b</div>
				<div className="green shadow">c</div>
			</div>
		);
	}
}
