import React, { Component } from "react";

import shape_1 from "../../../styletheme/theme/web/assets/img/shape/1.png";
import shape_2 from "../../../styletheme/theme/web/assets/img/shape/2.png";
import shape_3 from "../../../styletheme/theme/web/assets/img/shape/3.svg";
import shape_4 from "../../../styletheme/theme/web/assets/img/shape/4.svg";
import shape_5 from "../../../styletheme/theme/web/assets/img/shape/5.png";

class AboutTeam extends Component {
	state = {
		teamMembers: [
			{
				firstName: "Keijaoh",
				lastName: "Campbell",
				profileImage:
					"https://firebasestorage.googleapis.com/v0/b/keijaoh-576a0.appspot.com/o/authorProfilePictures%2FIMG_0037.JPG?alt=media&token=5564320c-10c0-4db6-929d-cccf3dbb76e9",
				bioInfo:
					"Keijaoh has a passion for learning new things and innovating. He likes taking on new challenges in his quest for knowledge and growth",
			},
			{
				firstName: "Jeffrey",
				lastName: "Fosgate",
				profileImage:
					"https://firebasestorage.googleapis.com/v0/b/keijaoh-576a0.appspot.com/o/defaultImages%2FNoImageFound.jpg1_.png?alt=media&token=75d79486-de11-4096-8b7d-d8b1945d71cf",
				bioInfo:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
			},
			{
				firstName: "Shea",
				lastName: "Keegan",
				profileImage:
					"https://firebasestorage.googleapis.com/v0/b/keijaoh-576a0.appspot.com/o/defaultImages%2FNoImageFound.jpg1_.png?alt=media&token=75d79486-de11-4096-8b7d-d8b1945d71cf",
				bioInfo:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
			},
			{
				firstName: "Jacob",
				lastName: "Lorenzo",
				profileImage:
					"https://firebasestorage.googleapis.com/v0/b/keijaoh-576a0.appspot.com/o/defaultImages%2FNoImageFound.jpg1_.png?alt=media&token=75d79486-de11-4096-8b7d-d8b1945d71cf",
				bioInfo:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
			},
			{
				firstName: "Tyler",
				lastName: "Walker",
				profileImage:
					"https://firebasestorage.googleapis.com/v0/b/keijaoh-576a0.appspot.com/o/defaultImages%2FNoImageFound.jpg1_.png?alt=media&token=75d79486-de11-4096-8b7d-d8b1945d71cf",
				bioInfo:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
			},
		],
	};

	async componentDidMount() {
		//called when the page is loaded
		//set at the top of the screen
		window.scrollTo(0, 0);
	}

	render() {
		const { teamMembers } = this.state;
		return (
			<React.Fragment>
				{/*Please place your HTML5 within the React.Fragment block  */}

				{/*Start Team Area */}
				<section className='team-area pt-100 pb-70'>
					<div className='container'>
						<div className='section-title'>
							<h2>Our Expert Team</h2>
							<div className='bar'></div>
							<p>
								Meet the team behind the latest iteration of the Squared game.
								This was built as a part of our Software Engineering Project at
								the University of Maine, Orono.
							</p>
						</div>

						<div className='row'>
							{teamMembers.map((value, index) => (
								<div key={index} className='col-lg-4 col-md-6'>
									<div className='single-team'>
										<div className='image'>
											<img src={value.profileImage} alt='image' />

											<ul className='social'>
												<li>
													<a href='#' target='_blank'>
														<i className='fab fa-facebook-f'></i>
													</a>
												</li>
												<li>
													<a href='#' target='_blank'>
														<i className='fab fa-twitter'></i>
													</a>
												</li>
												<li>
													<a href='#' target='_blank'>
														<i className='fab fa-instagram'></i>
													</a>
												</li>
												<li>
													<a href='#' target='_blank'>
														<i className='fab fa-linkedin-in'></i>
													</a>
												</li>
											</ul>

											<div className='content'>
												<h3>
													{value.firstName} {value.lastName}
												</h3>
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

export default AboutTeam;
