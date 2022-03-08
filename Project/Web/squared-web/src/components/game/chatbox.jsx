import React, {Component} from 'react'
import Chat from "../chat/chat"

class ChatBox extends React.Component {
		constructor(props) {
			super(props);
		}

    async componentDidMount() {
        //called when the page is loaded
    }

    componentDidMount() {
        //called immediately after a component is mounted (created)
    }

    componentWillUnmount() {
         //called immediately before a component is unmounted (destroyed)
    }

    render() {
			return (
				<div>
					<div id="chat-area">
						<Chat/>
						<form action="index.html" method="post">
							<input id="message" type="text" name="message" placeholder="Say hello!" required="required"/>
							<input id="chat-submit" type="submit" name="message"/>
						</form>
					</div>
					<div id="dice-area">
						<img src="../images/four.png" width="100px" height="100px" title="Four" alt="Four"/>
					</div>
				</div>
			);

		}
}

export default ChatBox;
