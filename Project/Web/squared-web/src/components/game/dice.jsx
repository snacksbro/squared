import React, {Component} from 'react'
import Die4 from '../../images/four.png'

class Dice extends React.Component {
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
				<div id="dice-area">
					<img src={Die4} width="100px" height="100px" title="Four" alt="Four"/>
				</div>
			);
		}
}

export default Dice;

