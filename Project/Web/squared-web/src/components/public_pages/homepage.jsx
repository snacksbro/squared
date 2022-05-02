import React, { Component } from "react";
import store_img_1 from "../../styletheme/theme/web/assets/img/store/1.png";
import store_img_2 from "../../styletheme/theme/web/assets/img/store/2.png";

import shape_1 from "../../styletheme/theme/web/assets/img/shape/1.png";
import shape_2 from "../../styletheme/theme/web/assets/img/shape/2.png";
import shape_3 from "../../styletheme/theme/web/assets/img/shape/3.svg";
import shape_4 from "../../styletheme/theme/web/assets/img/shape/4.svg";
import shape_5 from "../../styletheme/theme/web/assets/img/shape/5.png";
//square character
import green_character from "../../images/players/green-player.png";
import yellow_character from "../../images/players/yellow-player.png";
import blue_character from "../../images/players/blue-player.png";
import red_character from "../../images/players/red-player.png";
import { NavLink, Link } from "react-router-dom";
import AboutPlayers from "./about/aboutplayers";

class HomePage extends React.Component {
	state = {};
	//TODO: Need to host the project at http://squared.keijaoh.com/
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
				{/*	<h1>Home Page will go right here</h1>
				<h2>
					Show the player options and at the top say choose the player that
					speaks to your mood
				</h2>
				<h3>Show column grid of each player and who they are</h3>
        <h4>How to play section</h4>*/}
				{/* Start Main Banner Area */}
				<div id='home' className='main-banner'>
					<div className='d-table'>
						<div className='d-table-cell'>
							<div className='container-fluid'>
								<div className='row align-items-center'>
									<div className='col-lg-6'>
										<div className='banner-content'>
											<h1>Squared</h1>
											<p>
												The highly addictive game we have all been waiting for
												has arrived . Who will you choose to conquer the
												squares!!
											</p>

											<div className='banner-holder'>
												<h6>Coming soon to Android and iOS</h6>
												<a href='#'>
													<img src={store_img_1} alt='image' />
												</a>
												<a href='#'>
													<img src={store_img_2} alt='image' />
												</a>
											</div>
										</div>
									</div>

									<div className='col-lg-4'>
										<Link to={"/"}>
											<img
												src={green_character}
												alt='image'
												style={{ padding: "5px", height: "100%", width: "50%" }}
											/>
										</Link>
										<img
											src={yellow_character}
											alt='image'
											style={{ padding: "1px", height: "100%", width: "50%" }}
										/>
										<img
											src={blue_character}
											alt='image'
											style={{ padding: "3px", height: "100%", width: "50%" }}
										/>
										<img
											src={red_character}
											alt='image'
											style={{ padding: "1px", height: "100%", width: "50%" }}
										/>
									</div>
								</div>
							</div>
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
				</div>
				{/* End Main Banner Area */}

				{/* About the game*/}

				{/* About the game characteristics*/}
				<AboutPlayers />

				{/* About the game top players*/}

				{/* About the Store*/}

				{/* About the game developers*/}

				{/* Need a footer*/}
			</React.Fragment>
		);
	}
}

export default HomePage;
