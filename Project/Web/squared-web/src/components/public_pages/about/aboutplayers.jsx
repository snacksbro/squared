import React, { Component } from "react";

import shape_1 from "../../../styletheme/theme/web/assets/img/shape/1.png";
import shape_2 from "../../../styletheme/theme/web/assets/img/shape/2.png";
import shape_3 from "../../../styletheme/theme/web/assets/img/shape/3.svg";
import shape_4 from "../../../styletheme/theme/web/assets/img/shape/4.svg";
import shape_5 from "../../../styletheme/theme/web/assets/img/shape/5.png";
//characters
import green_character from "../../../images/players/green-player.png";
import yellow_character from "../../../images/players/yellow-player.png";
import blue_character from "../../../images/players/blue-player.png";
import red_character from "../../../images/players/red-player.png";

class AboutPlayers extends Component {
	state = {
		players: [
			{
				playerName: "Green",

				profileImage: green_character,
				bioInfo:
					"Green's personality is all about being overly excited and impulsive. Green wants everything, and he can't handle being in a confined space. He captures squares to feed his greed for more, so he has a lot of room to move around.",
			},
			{
				playerName: "Yellow",

				profileImage: yellow_character,
				bioInfo:
					"Yellow's personality is all about being grumpy and is easily jealous of other Squared characters. Yellow wants to capture all the squares because he doesn't want anyone else to have them but him, and he hates when people have something that he doesn't. Simply put, he captures squares so others can't have them.",
			},
			{
				playerName: "Blue",

				profileImage: blue_character,
				bioInfo:
					"Blues personality is about being solitary and gloomy. Blue doesn’t want anything to do with the other players, so he captures squares to keep other players from bothering him.",
			},
			{
				playerName: "Red",

				profileImage: red_character,
				bioInfo:
					"Red is filled with love and is over joyous. Red wants to spread joy and love, so he captures square to get closer to his fellow players.",
			},
		],
	};

	async componentDidMount() {
		//called when the page is loaded
		//set at the top of the screen
		window.scrollTo(0, 0);
	}

	render() {
		const { players } = this.state;
		return (
			<React.Fragment>
				{/*Please place your HTML5 within the React.Fragment block  */}

				{/*Start Team Area */}
				<section className='team-area pt-100 pb-70'>
					<div className='container'>
						<div className='section-title'>
							<h2>Meet the Squared Characters</h2>
							<div className='bar'></div>
							<p>
								Get to know the characters and figure out which character
								matches your characteristics best.
							</p>
						</div>

						<div className='row'>
							{players.map((value, index) => (
								<div key={index} className='col-lg-4 col-md-6'>
									<div className='single-team'>
										<div className='image'>
											<img
												src={value.profileImage}
												style={{ width: "85%" }}
												alt='image'
											/>

											<div className='content'>
												<h3>{value.playerName}</h3>
												<p>{value.bioInfo}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='default-shape'>
						<div className='shape-1'>
							<img src={shape_1} alt='image' />
						</div>

						<div className='shape-2 rotateme'>
							<img src={shape_2} alt='image' />
						</div>

						<div className='shape-3'>
							<img src={shape_3} alt='image' />
						</div>

						<div className='shape-4'>
							<img src={shape_4} alt='image' />
						</div>

						<div className='shape-5'>
							<img src={shape_5} alt='image' />
						</div>
					</div>
				</section>
				{/*End Team Area */}
			</React.Fragment>
		);
	}
}
export default AboutPlayers;
