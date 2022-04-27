import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import store_img_1 from "../../../styletheme/theme/web/assets/img/store/1.png";
import store_img_2 from "../../../styletheme/theme/web/assets/img/store/2.png";
import logo from "../../../images/squared-logo.png";

const GeneralFooter = (footer_img) => {
	return (
		<React.Fragment>
			{/* FOOTER SECTION */}
			{/* Start Footer Area */}
			<section class='footer-area pt-100 pb-70'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-3 col-sm-6'>
							<div class='single-footer-widget'>
								<Link to={"/"}>
									<img src={logo} style={{ width: "300px" }} />
								</Link>
								<p>
									SQUARED is a web-based online multiplayer game designed for
									two to four players.
								</p>
								<ul class='social-list'>
									<li>
										<a href='#' target='_blank'>
											<i class='fab fa-facebook-f'></i>
										</a>
									</li>
									<li>
										<a href='#' target='_blank'>
											<i class='fab fa-twitter'></i>
										</a>
									</li>
									<li>
										<a href='#' target='_blank'>
											<i class='fab fa-linkedin-in'></i>
										</a>
									</li>
									<li>
										<a href='#' target='_blank'>
											<i class='fab fa-instagram'></i>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div class='col-lg-3 col-sm-6'>
							<div class='single-footer-widget pl-5'>
								<h3>Company</h3>
								<ul class='list'>
									<li>
										<Link to='/ourteam'>Our Team</Link>
									</li>
								</ul>
							</div>
						</div>

						<div class='col-lg-3 col-sm-6'>
							<div class='single-footer-widget'>
								<h3>Game</h3>
								<ul class='list'>
									<li>
										<Link to='/game'>Play Game</Link>
									</li>
									<li>
										<Link to='/gamestore'>Store</Link>
									</li>
									<li>
										<Link to='/leaderboard'>Leaderboard</Link>
									</li>
									<li>
										<Link to='/learngame'>Learn</Link>
									</li>
									<li>
										<Link to='/register'>Sign Up</Link>
									</li>
									<li>
										<Link to='/login'>Login</Link>
									</li>
								</ul>
							</div>
						</div>

						<div class='col-lg-3 col-sm-6'>
							<div class='single-footer-widget'>
								<h3>
									Download <span>(coming soon)</span>
								</h3>

								<ul class='footer-holder'>
									<li>
										<a href='#'>
											<img src={store_img_2} alt='App Store' />
										</a>
									</li>
									<li>
										<a href='#'>
											<img src={store_img_1} alt='Google Play Store' />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End Footer Area */}

			{/* Start Copy Right Area */}
			<div class='copy-right'>
				<div class='container'>
					<div class='copy-right-content'>
						<p>
							<p class='copy__desc'>
								&copy; {new Date().getFullYear()} Keijaoh and Team. All Rights
								Reserved. by
								<Link to={{ pathname: "https://keijaoh.com/" }} target='_blank'>
									{" "}
									Keijaoh and Team
								</Link>
							</p>
						</p>
					</div>
				</div>
			</div>
			{/* End Copy Right Area */}

			{/* END of FOOTER SECTION */}
		</React.Fragment>
	);
};

export default GeneralFooter;
