import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles/scorebar.css'
import Players from './players.js'

class ScoreBar extends React.Component {
	constructor(props) {
		super(props);
		//this.props.players = [12, 14];
	}

	async componentDidMount() {
		//called when the page is loaded
	}

	componentWillUnmount() {
		//called immediately before a component is unmounted (destroyed)
	}

	render() {
		// TODO: Add an argument to allow it to take in something like an array of colors/usernames and building accordingly. For now it'll use 2.
		return (
			<div id="scorebar">
				<div id="red"><img class="icon" src={Players.red}/> x {this.props.scores[0]}</div>
				<div id="blue"><img class="icon" src={Players.blue}/> x {this.props.scores[1]}</div>
			</div>
		);
	}

}

export default ScoreBar;

