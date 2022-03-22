import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles/scorebar.css'
import BlueIcon from '../../images/blue-player.png'
import GreenIcon from '../../images/green-player.png'
import RedIcon from '../../images/red-player.png'
import YellowIcon from '../../images/yellow-player.png'

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
				<div id="red"><img class="icon" src={RedIcon}/> x {this.props.scores[0]}</div>
				<div id="blue"><img class="icon" src={BlueIcon}/> x {this.props.scores[1]}</div>
			</div>
		);
	}

}

export default ScoreBar;

