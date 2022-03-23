import React, { Component } from "react";
import Chat from "../chat/chat";
import Form from "../reuseable/form/form";
import Joi from "joi-browser";

class ChatBox extends Form {
	constructor(props) {
		super(props);
	}

	state = {
		chatHistoryList: [
			{
				userName: "Johnny",
				playerImg:
					"https://firebasestorage.googleapis.com/v0/b/keijaoh-576a0.appspot.com/o/Squared%2FCharacters%2Fred-player.png?alt=media&token=5135cf25-894c-40bd-b87b-673e35c96c02",

				chatMessage:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			},
			{
				userName: "Sue",
				playerImg:
					"https://firebasestorage.googleapis.com/v0/b/keijaoh-576a0.appspot.com/o/Squared%2FCharacters%2Fgreen-player.png?alt=media&token=a96bc277-7e21-472c-b10e-779bd3ff5230",

				chatMessage:
					"I am going to extend my lead :) and be the winner of this match. Win in sight!!",
			},
		],
		data: {
			chatMessage: "",
		},
		errors: {},
	};
	//Joi validation schema
	schema = {
		chatMessage: Joi.string().min(5).required().label("Message"), //use joi in node as well
	};

	async componentDidMount() {
		//called when the page is loaded

		//set at the top of the screen
		window.scrollTo(0, 0);
	}

	componentDidMount() {
		//called immediately after a component is mounted (created)
	}

	componentWillUnmount() {
		//called immediately before a component is unmounted (destroyed)
	}

	doSubmit = async () => {
		//login function
		try {
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				const errors = { ...this.state.errors };
				errors.emailAddress = ex.response.data;
				//Update the UI with the changes
				this.setState({ errors });
			}
		}
	};

	render() {
		const { chatHistoryList } = this.state;
		return (
			<React.Fragment>
				<div id='chat-area' style={{ width: "100%", border: "solid" }}>
					<Chat chatHistoryList={chatHistoryList} />
				</div>

				<form onSubmit={this.handleSubmit} style={{ paddingTop: "1%" }}>
					<div className='form-group'>
						{this.renderNoLabelInput(
							"chatMessage",

							"text",
							" form-control form-control-lg ajax-input",
							"Say Hello",
							"form-label",
							true,
							"la la-envelope input-icon",
						)}
					</div>
					<div className='form-group'>
						{this.renderButton(
							"Send Message",
							"btn btn-success btn-lg   button medium reverse",
						)}
					</div>
				</form>
			</React.Fragment>
		);
	}
}

export default ChatBox;
