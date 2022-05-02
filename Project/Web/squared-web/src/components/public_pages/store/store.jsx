import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchAllStoreItems } from "../../../services/store/storemanagement";

class Store extends React.Component {
	state = {
		storeItems: [
			{
				productTitle: "",

				productImageUrl: "",
				productDescription: "",
				productPrice: 0,
			},
		],
	};

	async componentDidMount() {
		//called when the page is loaded
		//set at the top of the screen
		window.scrollTo(0, 0);

		const { data: storeItems } = await fetchAllStoreItems();
		this.setState({ storeItems });
	}
	comingSoon() {
		toast.info("Purchase Functionality Coming soon");
	}

	render() {
		const { storeItems } = this.state;
		return (
			<React.Fragment>
				{/*Please place your HTML5 within the React.Fragment block  */}

				{/*Start Team Area */}
				<section className='team-area pt-100 pb-70'>
					<div className='container'>
						<div className='section-title'>
							<h2>Meet the Squared Store</h2>
							<div className='bar'></div>
							<p>
								You can buy and redeem game assets to enhance your gameplay
								experience.
							</p>
						</div>

						<div className='row'>
							{storeItems.map((value, index) => (
								<div key={index} className='col-lg-4 col-md-6'>
									<div className='single-team'>
										<div className='content'>
											<div className='single-pricing-table'>
												<div className='image'>
													<img
														src={value.productImageUrl}
														style={{ width: "85%" }}
														alt='image'
													/>
													<div className='pricing-header'>
														<h3>{value.productTitle}</h3>
													</div>{" "}
													<div className='pricing-header'>
														<h3 style={{ fontWeight: "normal" }}>
															{value.productDescription}
														</h3>
													</div>
													{value.productPrice && (
														<React.Fragment>
															<div className='price'>
																<sup>$</sup>
																{value.productPrice}
																<sub></sub>
															</div>
															<div className='pricing-btn'>
																<Link
																	to={"#"}
																	onClick={() => this.comingSoon()}
																	className='default-btn'>
																	Purchase
																	<span></span>
																</Link>
															</div>
														</React.Fragment>
													)}
												</div>
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
export default Store;
