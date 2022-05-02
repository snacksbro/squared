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
import {
	fetchAllTutorials,
	GetTutorialByTitle,
} from "../../../../services/learn/learnGameManagement";

class BlogDetail extends React.Component {
	state = {
		learningBlog: {
			tutorialTitle: "",

			tutorialImageUrl: "",
			tutorialOverview: "",
			tutorialDescription: "",
		},
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
		//tutorialTitle
		const tutorialTitle = this.props.match.params.tutorialTitle;
		//called when the page is loaded
		// alert(tutorialTitle)
		//set at the top of the screen
		window.scrollTo(0, 0);

		const { data: learningBlogs } = await GetTutorialByTitle(tutorialTitle);
		console.log(learningBlogs);
		if (learningBlogs.length > 0) {
			var targetBlog = learningBlogs[0];
			this.setState({ learningBlog: targetBlog });
		}

		const { data: blogs } = await fetchAllTutorials();
		console.log(blogs);
		this.setState({ learningBlogs: blogs });
	}
	comingSoon() {
		toast.info("Purchase Functionality Coming soon");
	}

	render() {
		const { learningBlog, learningBlogs } = this.state;
		return (
			<React.Fragment>
				{/* Start Page Title Area */}
				<div class='page-title-area'>
					<div class='d-table'>
						<div class='d-table-cell'>
							<div class='container'>
								<div class='page-title-content'>
									<h2>{learningBlog.tutorialTitle}</h2>
									<ul>
										<li>
											<Link to={"/learngame"}>Learn</Link>
										</li>
										<li>{learningBlog.tutorialTitle}</li>
									</ul>
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
				{/* End Page Title Area */}

				{/* Start Single Blog Area */}
				<section class='single-blog-area pt-100 pb-100'>
					<div class='container'>
						<div class='row'>
							<div class='col-lg-8 col-md-12'>
								<div class='blog-details-desc'>
									<div class='article-image'>
										<img src={learningBlog.tutorialImageUrl} alt='image' />
									</div>
									<div class='article-content'>
										<div class='entry-meta'>
											<ul>
												<li>
													<span>Posted On:</span>
													<a href='#'>May 1, 2022</a>
												</li>
												<li>
													<span>Posted By:</span>
													<a href='#'>Squared Team</a>
												</li>
											</ul>
										</div>

										<h3>{learningBlog.tutorialTitle}</h3>
										<blockquote class='wp-block-quote'>
											<p>{learningBlog.tutorialOverview}</p>
											<cite>Tom Cruise</cite>
										</blockquote>
										<p>{learningBlog.tutorialDescription}</p>
									</div>

									<div class='article-footer'>
										<div class='article-tags'>
											<span>
												<i class='fa fa-bookmark'></i>
											</span>
											<a href='#'>Tutorial</a>,<a href='#'>Game</a>
										</div>

										<div class='article-share'>
											<ul class='social'>
												<li>
													<span>Share:</span>
												</li>
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
														<i class='fab fa-instagram'></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class='col-lg-4 col-md-12'>
								<aside class='widget-area' id='secondary'>
									<section class='widget widget_colugo_posts_thumb'>
										<h3 class='widget-title'>Popular Tutorials</h3>
										{learningBlogs.map((value, index) => (
											<article key={index} class='item'>
												<a href='#' class='thumb'>
													<img
														src={value.tutorialImageUrl}
														class='fullimage cover '
														role='img'
													/>
												</a>
												<div class='info'>
													<time class='2022-05-1'>May 1, 2022</time>
													<h4 class='title usmall'>
														<a href='#'>{value.tutorialTitle}</a>
													</h4>
												</div>
											</article>
										))}
									</section>
								</aside>
							</div>
						</div>
					</div>
				</section>
				{/* End Single Blog Area */}
			</React.Fragment>
		);
	}
}
export default BlogDetail;
