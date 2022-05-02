import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import shape_1 from "../../../../styletheme/theme/web/assets/img/shape/1.png";
import shape_2 from "../../../../styletheme/theme/web/assets/img/shape/2.png";
import shape_3 from "../../../../styletheme/theme/web/assets/img/shape/3.svg";
import shape_4 from "../../../../styletheme/theme/web/assets/img/shape/4.svg";
import shape_5 from "../../../../styletheme/theme/web/assets/img/shape/5.png";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchAllStoreItems } from "../../../../services/store/storemanagement";
import { fetchAllTutorials } from "../../../../services/learn/learnGameManagement";

class LearnBlogs extends React.Component {
	state = {
		learningBlogs: [
			{
				tutorialTitle: "",

				tutorialImageUrl:
					"https://firebasestorage.googleapis.com/v0/b/keijaoh-576a0.appspot.com/o/Squared%2FStoreAssets%2FRetroGameStreamerartboard-01.png?alt=media&token=e2c88a46-edb5-4794-8bbe-b955825b133c",
				tutorialOverview: "",
				tutorialDescription: "",
			},
		],
	};

	async componentDidMount() {
		//called when the page is loaded
		//set at the top of the screen
		window.scrollTo(0, 0);

		const { data: learningBlogs } = await fetchAllTutorials();
		console.log(learningBlogs);
		this.setState({ learningBlogs });
	}
	comingSoon() {
		toast.info("Purchase Functionality Coming soon");
	}

	render() {
		const { learningBlogs } = this.state;
		return (
			<React.Fragment>
				{/*Please place your HTML5 within the React.Fragment block  */}

				{/*Start Team Area */}
				<section className='team-area pt-100 pb-70'>
					<div className='container'>
						<div className='section-title'>
							<h2>Squared How To Blogs</h2>
							<div className='bar'></div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incidiunt labore et dolore magna aliqua. Quis
								ipsum suspendisse ultrices gravida.
							</p>
						</div>

						<div className='row'>
							{learningBlogs.map((value, index) => (
								<div key={index} className='col-lg-4 col-md-6'>
									<div className='single-blog'>
										<div className='image'>
											<Link to={`/blogdetail/${value.tutorialTitle}`}>
												<img src={value.tutorialImageUrl} alt='image' />
											</Link>
											<div className='btn'>
												<Link to={`/blogdetail/${value.tutorialTitle}`}>
													Game Tutorial
												</Link>
											</div>
										</div>
										<div className='content'>
											<ul className='post-meta'>
												<li>
													<i className='fa fa-calendar'></i>1 May 2022
												</li>
												<li>
													<i className='fa fa-comments'></i>
													<Link to={`/blogdetail/${value.tutorialTitle}`}>
														0 Comment
													</Link>
												</li>
											</ul>

											<h3>
												<Link to={`/blogdetail/${value.tutorialTitle}`}>
													{value.tutorialTitle}
												</Link>
											</h3>
											<p>{value.tutorialOverview}</p>
											<Link
												to={`/blogdetail/${value.tutorialTitle}`}
												className='read-more'>
												Read More
											</Link>
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
export default LearnBlogs;
