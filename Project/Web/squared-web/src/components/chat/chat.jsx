import React, { Component } from "react";
//<link href="../src/chat.css" type="text/css" rel="stylesheet">
import "../../styletheme/chat/chat.css";
import "../game/styles/scorebar.css";

const Chat = ({ chatHistoryList }) => {
	return (
		<React.Fragment>
			<div style={{ width: "100%" }}>
				<ul style={{ listStyleType: "none" }}>
					{chatHistoryList.map((value, index) => (
						<React.Fragment>
							<li key={index}>
								<p className='player1'>
									<img
										src={value.playerImg}
										style={{
											width: "2em",
											height: "2em",
											align: "center",
											padding: "1%",
										}}
									/>
									<span className='username'>{value.userName}</span>: <br />
									<p className='message' style={{ maxWidth: "100%" }}>
										{value.chatMessage}
									</p>
								</p>
							</li>
						</React.Fragment>
					))}
				</ul>
			</div>
		</React.Fragment>
	);
};

export default Chat;
