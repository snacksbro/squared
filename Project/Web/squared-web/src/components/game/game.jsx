import React, {Component} from 'react'
import Chat from "../chat/chat"
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

        return(
            <React.Fragment>
                {/*Please place your HTML5 within the React.Fragment block  */}
               
<div id="board-area">
			<table id="board">
				<tr>
					<td id="11a"></td>
					<td id="11b"></td>
					<td id="11c"></td>
					<td id="11d"></td>
					<td id="11e"></td>
					<td id="11f"></td>
					<td id="11g"></td>
					<td id="11h" class="green-captured"></td>
					<td id="11i" class="green-captured"></td>
					<td id="11j"></td>
					<td id="11k" class="green-captured"></td>
				</tr>
				<tr>
					<td id="10a"></td>
					<td id="10b"></td>
					<td id="10c"></td>
					<td id="10d"></td>
					<td id="10e"></td>
					<td id="10f"></td>
					<td id="10g"></td>
					<td id="10h" class="green-captured"></td>
					<td id="10i"></td>
					<td id="10j"></td>
					<td id="10k"></td>
				</tr>
				<tr>
					<td id="9a"></td>
					<td id="9b"></td>
					<td id="9c"></td>
					<td id="9d"></td>
					<td id="9e"></td>
					<td id="9f"></td>
					<td id="9g" class="green-captured"></td>
					<td id="9h"></td>
					<td id="9i" class="green-captured"></td>
					<td id="9j"></td>
					<td id="9k"></td>
				</tr>
				<tr>
					<td id="8a"></td>
					<td id="8b"></td>
					<td id="8c"></td>
					<td id="8d"></td>
					<td id="8e"></td>
					<td id="8f"></td>
					<td id="8g" class="green-captured green-location"></td>
					<td id="8h"></td>
					<td id="8i"></td>
					<td id="8j"></td>
					<td id="8k"></td>
				</tr>
				<tr>
					<td id="7a"></td>
					<td id="7b"></td>
					<td id="7c"></td>
					<td id="7d"></td>
					<td id="7e"></td>
					<td id="7f"></td>
					<td id="7g"></td>
					<td id="7h"></td>
					<td id="7i"></td>
					<td id="7j"></td>
					<td id="7k"></td>
				</tr>
				<tr>
					<td id="6a"></td>
					<td id="6b"></td>
					<td id="6c"></td>
					<td id="6d"></td>
					<td id="6e"></td>
					<td id="6f"></td>
					<td id="6g"></td>
					<td id="6h"></td>
					<td id="6i"></td>
					<td id="6j"></td>
					<td id="6k"></td>
				</tr>
				<tr>
					<td id="5a"></td>
					<td id="5b"></td>
					<td id="5c" class="highlighted"></td>
					<td id="5d"></td>
					<td id="5e" class="highlighted"></td>
					<td id="5f"></td>
					<td id="5g"></td>
					<td id="5h"></td>
					<td id="5i"></td>
					<td id="5j"></td>
					<td id="5k"></td>
				</tr>
				<tr>
					<td id="4a" class="blue-captured"></td>
					<td id="4b"></td>
					<td id="4c" class="blue-captured"></td>
					<td id="4d" class="blue-captured blue-location"></td>
					<td id="4e"></td>
					<td id="4f"></td>
					<td id="4g"></td>
					<td id="4h"></td>
					<td id="4i"></td>
					<td id="4j"></td>
					<td id="4k"></td>
				</tr>
				<tr>
					<td id="3a"></td>
					<td id="3b"></td>
					<td id="3c" class="blue-captured"></td>
					<td id="3d"></td>
					<td id="3e" class="highlighted"></td>
					<td id="3f"></td>
					<td id="3g"></td>
					<td id="3h"></td>
					<td id="3i"></td>
					<td id="3j"></td>
					<td id="3k"></td>
				</tr>
				<tr>
					<td id="2a" class="blue-captured"></td>
					<td id="2b" class="blue-captured"></td>
					<td id="2c"></td>
					<td id="2d" class="blue-captured"></td>
					<td id="2e"></td>
					<td id="2f"></td>
					<td id="2g"></td>
					<td id="2h"></td>
					<td id="2i"></td>
					<td id="2j"></td>
					<td id="2k"></td>
				</tr>
				<tr>
					<td id="1a" class="blue-captured"></td>
					<td id="1b"></td>
					<td id="1c"></td>
					<td id="1d"></td>
					<td id="1e"></td>
					<td id="1f"></td>
					<td id="1g"></td>
					<td id="1h"></td>
					<td id="1i"></td>
					<td id="1j"></td>
					<td id="1k"></td>
				</tr>
			</table>
		</div>
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


