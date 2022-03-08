import React, {Component} from 'react'
import Chat from "../chat/chat"
import Board from "./board"
import ChatBox from "./chatbox"
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
					<ChatBox/>
            </React.Fragment>
        )
    }

}

export default Game


