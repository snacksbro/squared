import React from "react";
import Form from "../reuseable/form/form";
import Joi from "joi-browser";
import { Redirect, Link } from "react-router-dom";
import shape_1 from "../../styletheme/theme/web/assets/img/shape/1.png";
import shape_2 from "../../styletheme/theme/web/assets/img/shape/2.png";
import shape_3 from "../../styletheme/theme/web/assets/img/shape/3.svg";
import shape_4 from "../../styletheme/theme/web/assets/img/shape/4.svg";
import shape_5 from "../../styletheme/theme/web/assets/img/shape/5.png";
import {
	authLoginUser,
	getCurrentUser,
} from "../../services/authentication/authentication";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
		password: Joi.string().min(16).required().label("Password"), //use joi in node as well
		emailAddress: Joi.string().email().required().label("Email Address"),
		//lastName: Joi.string().required().label("Last Name"),
	};

	async componentDidMount() {
		//called when the page is loaded
		toast//set at the top of the screen
		.window
			.scrollTo(0, 0);
	}

	componentWillUnmount() {
		//called immediately before a component is unmounted (destroyed)
	}
	//Need the Sub Form
	doSubmit = async () => {
		//login function
		try {
			const { data } = this.state;
			const accountPayLoad = {
				emailAddress: data.emailAddress,
				password: data.password,
			};
			try {
				var result = await authLoginUser(accountPayLoad);
				toast.info(result);
				//get the current location
				const { state } = this.props.location;

				//force a reload of the page
				window.location = state ? state.from.pathname : "/game";
			} catch (ex) {
				console.log(ex.response.data.message);
				toast.error(ex.response.data.message);
				return;
			}
		} catch (ex) {
			if (
				(ex.response && ex.response.status === 400) ||
				ex.response.status === 409
			) {
				const errors = { ...this.state.errors };
				errors.emailAddress = ex.response.data.message;
				toast.error(ex.response.data.message);
				//Update the UI
				this.setState({ errors });
			}
		}
	};

	render() {
		//if user logged in
		if (getCurrentUser()) return <Redirect to='/game' />;
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
									<form id='contactForm' onSubmit={this.handleSubmit}>
										<div className='row'>
											<div className='col-lg-12 col-md-12'>
												{this.renderTextInputLabel(
													"emailAddress",
													"Email Address",
													"text",
													"form-control",
													"Email Address",
													"label-text",
													true,
													"la la-envelope input-icon",
												)}
											</div>
											<div className='col-lg-12 col-md-12'>
												{this.renderTextInputLabel(
													"password",
													"Password",
													"password",
													"form-control",
													"Password",
													"label-text",
													true,
													"la la-envelope input-icon",
												)}
											</div>

											<div className='col-lg-12 col-md-12'>
												{this.renderButton("Login", "default-btn")}
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
