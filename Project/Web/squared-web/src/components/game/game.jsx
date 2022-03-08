import React, {Component} from 'react'
import Chat from "../chat/chat"
import Board from "./board"
import "../../styletheme/chat/chat.css"
class Game extends React.Component{
    state = {

    }


    async componentDidMount(){
        //called when the page is loaded
    }

    componentDidMount(){
        //called immediately after a component is mounted (created)

    }

    componentWillUnmount() {
         //called immediately before a component is unmounted (destroyed)


    }

    render(){

			// NOTE: captured squares use class="color-captured" and location is "color-location" along with "highlighted"
        return(
            <React.Fragment>
                {/*Please place your HTML5 within the React.Fragment block  */}
               
							<Board/>
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
            </React.Fragment>
        )
    }

}

export default Game


