import React, {Component} from 'react'
import http from '../../services/general/httpService.js'
import Players from './players.js'

const updateInterval = 1000; // How often the board refreshes itself in ms
// Essentially, this is everything that makes up the board rows/cols itself
class Square extends React.Component {
	constructor(props) {
		super(props);
		this.sendRequest = this.sendRequest.bind(this);
		this.setIcon = this.setIcon.bind(this);
		this.updateScores = this.updateScores.bind(this);
		this.state = {
			icon: ""
		}
		setInterval(this.updateScores, updateInterval);
	}

	setIcon(icon) {
		this.setState({
			icon: icon
		});
	}

	updateScores() {
		if (this.props.boardData.turn != undefined) {
			for (let i = 0; i < this.props.boardData.positions.length; i++) {
				// If a player is in the position, set their icon
				if (this.props.squareID == this.props.boardData.positions[i]) {
					this.setIcon(Players[this.props.boardData.playerColors[i]]);
					return;
				}
			}
			this.setIcon(" ");
		}
	}

	// sendRequest: Sends a basic request to the flask server
	sendRequest() {
		http.get("http://127.0.0.1:5000/verify?square=" + this.props.squareID)
			.then(function(res) {
				//alert(res.data);
		});
		/* Old implementation
		let req = new XMLHttpRequest();
		req.addEventListener("load", () => {
			alert(req.responseText);
		});
		req.open("GET", "http://127.0.0.1:5000/verify?square=" + this.props.squareID);
		req.send();
		*/
	}

	componentDidMount() {
		//called when the page is loaded
		//this.setIcon(Players.red);
	}

	componentWillUnmount() {
		//called immediately before a component is unmounted (destroyed)
	}

	// TODO: Get state of board, send state to whichever squares need it
	render() {
		// React's async nature is REALLY annoying when dealing with stuff like this. So basically I have to error check it to make sure it's "speedy fast woohoo" nature doesn't stick the component in WITHOUT the props it needs to run. Seriously what the hell? Give me a "hey this request needs to happen before you go sonic on me" option. Or maybe there is one but the docs are so terrible I couldn't find it.
		//return <td id={this.props.squareID} onClick={this.sendRequest}><img id="square-icon" src={this.state.icon}/></td>
		console.log(this.props.claim)
		return <td className={this.props.claim + "-captured board-square"} style={{backgroundImage: `url(${this.state.icon})`}} id={this.props.squareID} onClick={this.sendRequest}></td>
	}
}

// The board's rows. This is basically a bunch of Squares
class BoardRow extends React.Component {
	constructor(props) {
		super(props);
	}

	async componentDidMount() {
	//called when the page is loaded
	}

	componentWillUnmount() {
	 //called immediately before a component is unmounted (destroyed)
	}

	render() {
		let row = [];
		let alphabet = "abcdefghijk";

		for (let i = 0; i <= 10; i++) {
			row.push(<Square claim={this.props.boardData.board?.[i][alphabet.indexOf(this.props.rowChar)]} boardData={this.props.boardData} squareID={i + this.props.rowChar}/>);
		}

		return (
		<tr>
		{row}
		</tr>)
		}
}

// The board. This is just a bunch of BoardRows
class Board extends React.Component{
		constructor(props) {
			super(props);
			this.state = {
				game: ""
			}
			this.updateGameState = this.updateGameState.bind(this);
			setInterval(this.updateGameState, updateInterval);
		}

		updateGameState() {
			// query boardsize
			// query players/colors
			// query locations
			// query status (locations/turn) (every 3 seconds??)
			http.get("http://127.0.0.1:5000/initialize")
				.then(function(res) {
					this.setState({
						game: res.data
					});
			}.bind(this)); // This line is VERY important. Basically it wasn't letting me setState since it couldn't "see" 'this' yet. So I had to manually bind it so it could access this.setState. Similar to in other constructors (like Square's) where you have to bind functions to this.
		}

		componentDidMount(){
			this.updateGameState();
		}

		componentWillUnmount() {
				 //called immediately before a component is unmounted (destroyed)


		}

		render(){
			let boardCharacters = "abcdefghijk";
			let boardObj = [];
			for (let i = 0; i < boardCharacters.length; i++) {
				boardObj.push(<BoardRow boardData={this.state.game} rowChar={boardCharacters[i]}/>);
			}

			return(<div id="board-area"><table id="board">{boardObj}</table></div>);
		}
}

export default Board;

