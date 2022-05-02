import React, { Component } from "react";
import AboutPlayers from "./about/aboutplayers";
import LearnBlogs from "./about/morelearn/learnblogs";

class Learn extends React.Component {
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
				{/*Please place your HTML5 within the React.Fragment block  
				<h1>Learn how to play Squared Page will go right here</h1>

                Show what the rules are etc
                */}
				<AboutPlayers />

				<LearnBlogs />
			</React.Fragment>
		);
	}
}

export default Learn;
