import React, {Component} from 'react'

class Square extends React.Component {
	constructor(props) {
		super(props);
		this.sendRequest = this.sendRequest.bind(this);
	}

	sendRequest() {
		let req = new XMLHttpRequest();
		req.addEventListener("load", () => {
			alert(req.responseText);
		});
		// TODO: Add some sort of environment variable to specify IP
		req.open("GET", "http://127.0.0.1:5000/diceroll");
		req.send();
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
			//return(<Square squareID="testid"/>);
			let boardCharacters = "abcdefghijk";
			let boardObj = [];
			for (let i = 0; i < boardCharacters.length; i++) {
				boardObj.push(<BoardRow rowChar={boardCharacters[i]}/>);
			}

			return(<div id="board-area"><table id="board">{boardObj}</table></div>);
		}
}

export default Board;

