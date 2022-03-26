import React, {Component} from 'react'
import http from '../../services/general/httpService.js'
import Players from './players.js'

// Essentially, this is everything that makes up the board rows/cols itself
class Square extends React.Component {
	constructor(props) {
		super(props);
		this.sendRequest = this.sendRequest.bind(this);
		this.setIcon = this.setIcon.bind(this);
		this.state = {
			icon: Players.red
		}
	}

	setIcon(icon) {
		this.setState({
			icon: icon
		});
	}

	// sendRequest: Sends a basic request to the flask server
	sendRequest() {
		http.get("http://127.0.0.1:5000/verify?square=" + this.props.squareID)
			.then(function(res) {
				alert(res.data);
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

	async componentDidMount() {
		//called when the page is loaded
		//this.setIcon(Players.red);
	}

	componentWillUnmount() {
		//called immediately before a component is unmounted (destroyed)
	}

	render() {
		//return <td id={this.props.squareID} onClick={this.sendRequest}><img id="square-icon" src={this.state.icon}/></td>
		return <td class="board-square" style={{backgroundImage: `url(${this.state.icon})`}} id={this.props.squareID} onClick={this.sendRequest}></td>
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
		for (let i = 1; i <= 11; i++) {
			row.push(<Square squareID={i + this.props.rowChar}/>);
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
		}

		async componentDidMount(){
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

		componentWillUnmount() {
				 //called immediately before a component is unmounted (destroyed)


		}

		render(){
			let boardCharacters = "abcdefghijk";
			let boardObj = [];
			for (let i = 0; i < boardCharacters.length; i++) {
				boardObj.push(<BoardRow rowChar={boardCharacters[i]}/>);
			}

			return(<div id="board-area"><table id="board">{boardObj}</table></div>);
		}
}

export default Board;

