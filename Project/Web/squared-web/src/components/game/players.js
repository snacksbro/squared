import BlueIcon from '../../images/players/blue-player.png'
import GreenIcon from '../../images/players/green-player.png'
import RedIcon from '../../images/players/red-player.png'
import YellowIcon from '../../images/players/yellow-player.png'

// This is essentially an easy way of getting all the players rather than importing each one for each component that needs them. This is just to make code neater
// ex. import Players from ./players.js then doing Players.red would return the red player image
let Players = {
	yellow: YellowIcon,
	blue: BlueIcon,
	red: RedIcon,
	green: GreenIcon
}

export default Players

