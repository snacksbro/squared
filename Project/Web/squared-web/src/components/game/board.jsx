import React, {Component} from 'react'
import http from '../../services/general/httpService.js'

// Essentially, this is everything that makes up the board rows/cols itself
class Square extends React.Component {
	constructor(props) {
		super(props);
		this.sendRequest = this.sendRequest.bind(this);
	}

	// sendRequest: Sends a basic request to the flask server
	// TODO: Make this a generic function that can be used anywhere
	sendRequest() {
		http.get("http://127.0.0.1:5000/verify?square=" + this.props.squareID)
			.then(function(res) {
				alert(res.data);
			});
		/*
		let req = new XMLHttpRequest();
		req.addEventListener("load", () => {
			alert(req.responseText);
		});
		// TODO: Add some sort of environment variable to specify IP
		req.open("GET", "http://127.0.0.1:5000/verify?square=" + this.props.squareID);
		req.send();
		*/
	}

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
		return <td id={this.props.squareID} onClick={this.sendRequest}></td>
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

	componentDidMount() {
	//called immediately after a component is mounted (created)
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
		state = {

		}


		async componentDidMount(){
				//called when the page is loaded
		}

		componentDidMount(){
				//called immediately after a component is mounted (created)

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

