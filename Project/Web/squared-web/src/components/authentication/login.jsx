import React from "react";
import Form from "../reuseable/form/form";
import Joi from "joi-browser";
import { Redirect, Link } from "react-router-dom";
import shape_1 from "../../styletheme/theme/web/assets/img/shape/1.png";
import shape_2 from "../../styletheme/theme/web/assets/img/shape/2.png";
import shape_3 from "../../styletheme/theme/web/assets/img/shape/3.svg";
import shape_4 from "../../styletheme/theme/web/assets/img/shape/4.svg";
import shape_5 from "../../styletheme/theme/web/assets/img/shape/5.png";

//TODO need to add the Form element
class LoginPage extends Form {
	state = {
		data: {
			emailAddress: "",
			password: "",
		},
		errors: {},
	};
	schema = {
		password: Joi.string().min(7).required().label("Password"), //use joi in node as well
		emailAddress: Joi.string().email().required().label("Email Address"),
		lastName: Joi.string().required().label("Last Name"),
	};

	async componentDidMount() {
		//called when the page is loaded
	}

	componentDidMount() {
		//called immediately after a component is mounted (created)
	}

	componentWillUnmount() {
		//called immediately before a component is unmounted (destroyed)
	}
	//Need the Sub Form

	render() {
		return (
			<React.Fragment>
				{/*Please place your HTML5 within the React.Fragment block  */}

				{/* Start Contact Area */}
				<section id='contact' className='contact-area ptb-100'>
					<div className='container'>
						<div className='section-title'>
							<h2>Login Page</h2>
							<div className='bar'></div>
							<p>
								Enter your email address and password to play Squared,
								participate in chat or buy items on the store.
							</p>
						</div>

						<div className='row align-items-center'>
							<div className='col-lg-12'>
								<div className='contact-form'>
									<form id='contactForm'>
										<div className='row'>
											<div className='col-lg-12 col-md-12'>
												<div className='form-group'>
													<input
														type='email'
														name='email'
														id='email'
														className='form-control'
														required
														data-error='Please enter your email'
														placeholder='Your Email'
													/>
													<div className='help-block with-errors'></div>
												</div>
											</div>

											<div className='col-lg-12 col-md-12'>
												<div className='form-group'>
													<input
														type='password'
														name='password'
														id='password'
														className='form-control'
														required
														data-error='Please enter your password'
														placeholder='Your Password'
													/>
													<div className='help-block with-errors'></div>
												</div>
											</div>

											<div className='col-lg-12 col-md-12'>
												<div className='send-btn'>
													<button type='submit' className='default-btn'>
														Login
														<span></span>
													</button>
													<div
														id='msgSubmit'
														className='h3 text-center hidden'></div>
													<div className='clearfix'></div>
												</div>
											</div>
										</div>
									</form>
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
				</section>
				{/* End Contact Area */}
			</React.Fragment>
		);
	}
}

export default LoginPage;
