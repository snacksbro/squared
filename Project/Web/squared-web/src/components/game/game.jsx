import React, { Component } from "react";
import Chat from "../chat/chat";
import Board from "./board";
import ChatBox from "./chatbox";
import Dice from "./dice";
import ScoreBar from "./scorebar";
import "../../styletheme/chat/chat.css";
import "./styles/game.css";

class Game extends React.Component {
	state = {
		playerScores: [
			{
				playerId: "1",
				playerName: "Red",
				playerImage:
					"https://firebasestorage.googleapis.com/v0/b/keijaoh-576a0.appspot.com/o/Squared%2FCharacters%2Fred-player.png?alt=media&token=5135cf25-894c-40bd-b87b-673e35c96c02",
				score: 12,
			},
			{
				playerId: "2",
				playerName: "Blue",
				playerImage:
					"https://firebasestorage.googleapis.com/v0/b/keijaoh-576a0.appspot.com/o/Squared%2FCharacters%2Fblue-player.png?alt=media&token=9fcb3fed-d55e-46a8-89ce-540b985b2d8f",
				score: 14,
			},
			{
				playerId: "3",
				playerName: "Green",
				playerImage:
					"https://firebasestorage.googleapis.com/v0/b/keijaoh-576a0.appspot.com/o/Squared%2FCharacters%2Fgreen-player.png?alt=media&token=a96bc277-7e21-472c-b10e-779bd3ff5230",
				score: 25,
			},
			{
				playerId: "4",
				playerName: "Yellow",
				playerImage:
					"https://firebasestorage.googleapis.com/v0/b/keijaoh-576a0.appspot.com/o/Squared%2FCharacters%2Fyellow-player.png?alt=media&token=a1c84b52-f8b7-4f16-b38b-b305fa557829",
				score: 12,
			},
		],
	};

	async componentDidMount() {
		//called when the page is loaded
	}

	componentWillUnmount() {
		//called immediately before a component is unmounted (destroyed)
	}

	render() {
		const { playerScores } = this.state;

		// NOTE: captured squares use class="color-captured" and location is "color-location" along with "highlighted"
		return (
			<React.Fragment>
				{/*Please place your HTML5 within the React.Fragment block  */}

				<div id='game-container'>
					<div id='left-view'>
						<Dice />
					</div>
					<div id='main-view'>
						{/*<ScoreBar players={["red", "blue"]} scores={[playerScores[0].score, 14]} />*/}
						<ScoreBar playerScores={playerScores} />
						<Board />
					</div>
					<div id='right-view' style={{ paddingRight: "1%" }}>
						<ChatBox />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Game;
