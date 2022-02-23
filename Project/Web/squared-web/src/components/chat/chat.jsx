import React, {Component} from 'react'
//<link href="../src/chat.css" type="text/css" rel="stylesheet">
import "../../styletheme/chat/chat.css"
class Chat extends React.Component{
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
                <p class="player1"><span class="username">USER</span>: <span class="message">MESSAGE</span></p>
		        <p class="player2"><span class="username">USER</span>: <span class="message">MESSAGE</span></p>
            </React.Fragment>
        )
    }

}

export default Chat