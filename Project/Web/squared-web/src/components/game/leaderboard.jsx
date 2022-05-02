import React, { Component } from "react";
import green_character from "../../images/players/green-player.png";
import { fetchOtherTopPlayers, fetchTopThreePlayers } from "../../services/leaderboard/leaderBoardService";

class Leaderboard extends React.Component {
	state = {
		topPlayers: [
			{
				firstName: "",
				lastName: "",
				profileImage: "",
				score: 0,
			},
		],

		otherPlayers: [
			{
				firstName: "Keijaoh",
				lastName: "Campbell",
				profileImage:
					"https://firebasestorage.googleapis.com/v0/b/keijaoh-576a0.appspot.com/o/authorProfilePictures%2FIMG_0037.JPG?alt=media&token=5564320c-10c0-4db6-929d-cccf3dbb76e9",
				score: 50,
			},
			{
				firstName: "Jeffrey",
				lastName: "Fosgate",
				profileImage:
					"https://firebasestorage.googleapis.com/v0/b/keijaoh-576a0.appspot.com/o/defaultImages%2FNoImageFound.jpg1_.png?alt=media&token=75d79486-de11-4096-8b7d-d8b1945d71cf",
				score: 48,
			},
			{
				firstName: "Shea",
				lastName: "Keegan",
				profileImage:
					"https://firebasestorage.googleapis.com/v0/b/keijaoh-576a0.appspot.com/o/defaultImages%2FNoImageFound.jpg1_.png?alt=media&token=75d79486-de11-4096-8b7d-d8b1945d71cf",
				score: 45,
			},
		],
	};

	async componentDidMount() {
		//called when the page is loaded
		//set at the top of the screen
		window.scrollTo(0, 0);

		const { data: topPlayers } = await fetchTopThreePlayers();
		console.log(topPlayers);
        this.setState({ topPlayers: topPlayers });
        
        const { data: otherPlayers } = await fetchOtherTopPlayers();
        console.log(otherPlayers);
        this.setState({ otherPlayers: otherPlayers });
        ;
	}

	componentWillUnmount() {
		//called immediately before a component is unmounted (destroyed)
	}

	render() {
		const { topPlayers, otherPlayers } = this.state;
		return (
			<React.Fragment>
				{/*Please place your HTML5 within the React.Fragment block  */}

				<section class='pricing-area pt-100 pb-70'>
					<div class='container'>
						<div class='section-title'>
							<h2>Our Top 3 Players</h2>
							<div class='bar'></div>
							<p>
								These are the players with the top score since our last Squared
								Tournament.
							</p>
						</div>

						<div class='tab_content'>
							<div class='tabs_item'>
								<div class='row'>
									{topPlayers.map((value, index) => (
										<div key={index} class='col-lg-4 col-md-6'>
											<div class='single-pricing-table'>
												<div class='pricing-header'>
													<div class='comment-author vcard'>
														<div class='single-blog'>
															<div class='image'>
																<a href='single-blog.html'>
																	<img
																		src={value.profileImage}
																		class='avatar'
																		alt='image'
																	/>
																</a>
																<div class='btn'>
																	<a href='#'>
																		{" "}
																		<span>Ranked # {index + 1}</span>
																	</a>
																</div>
															</div>
														</div>
														<br />
														<div class='price'>
															<sub>
																{value.firstName} {value.lastName}{" "}
															</sub>

															<div>
																{value.score} <sub>points</sub>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/*Other players who arent in the top 3 */}

				<section id='features' class='features-area pb-70'>
					<div class='container'>
						<div class='section-title'>
							<h3>Other Top Ranking Players</h3>
							<div class='bar'></div>
							<p>
								Our other top rising stars that are fighting to one day be in
								the Top 3.
							</p>
						</div>

						<div class='row'>
							{otherPlayers.map((value, index) => (
								<div class='comments-area col-lg-4 col-md-6'>
									<ol>
										<li class='comment'>
											<article
												class='comment-body'
												style={{ bottomBorder: "0" }}>
												<div class='comment-meta'>
													<div class='comment-author vcard'>
														<img
															src={value.profileImage}
															class='avatar'
															alt='image'
														/>
														<b class='fn'>
															{value.firstName} {value.lastName}{" "}
														</b>
													</div>
													<span style={{ fontSize: "24" }}>
														{" "}
														{value.score} points
													</span>
												</div>
											</article>
										</li>
									</ol>
								</div>
							))}
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Leaderboard;
