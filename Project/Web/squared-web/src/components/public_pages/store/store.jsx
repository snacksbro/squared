import React, { Component } from "react";

class Store extends React.Component {
	state = {};

	async componentDidMount() {
		//called when the page is loaded
	}

	componentDidMount() {
		//called immediately after a component is mounted (created)
	}

	componentWillUnmount() {
		//called immediately before a component is unmounted (destroyed)
	}

	render() {
		return (
			<React.Fragment>
				{/*Please place your HTML5 within the React.Fragment block  */}
				<h1>Store Page</h1>
				<h3>Feature coming soon</h3>
			</React.Fragment>
		);
	}
}

export default Store;
