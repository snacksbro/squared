
import React, {Component} from 'react'

class Leaderboard extends React.Component{
    state = {
        userName: ''
    }


    async componentDidMount(){
        //called when the page is loaded
    }


    componentWillUnmount() {
         //called immediately before a component is unmounted (destroyed)


    }

    render(){
        
        return(
            <React.Fragment>
                {/*Please place your HTML5 within the React.Fragment block  */}
              <h1>Leaderboard Page will go  right here</h1>
            </React.Fragment>
        )
    }

}

export default Leaderboard