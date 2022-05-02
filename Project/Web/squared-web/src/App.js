import "./App.css";
import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
//importing pages
import Game from "./components/game/game";
import HomePage from "./components/public_pages/homepage";
import NotFound from "./components/error/notfound";
import NavBar from "./components/reuseable/navigation/navbar";
import Leaderboard from "./components/game/leaderboard";
import Learn from "./components/public_pages/learngame";
import LoginPage from "./components/authentication/login";
import RegistrationPage from "./components/authentication/registration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/reuseable/security/protectedRoute";
import {
	getCurrentUser,
	getCurrentUserProfile,
} from "./services/authentication/authentication";
import LogOut from "./components/authentication/logout";
import AboutTeam from "./components/public_pages/about/aboutteam";
import AboutPlayers from "./components/public_pages/about/aboutplayers";
import GeneralFooter from "./components/reuseable/navigation/footer";
import logo from "./images/squared-logo.png";
import Store from "./components/public_pages/store/store";
import BlogDetail from "./components/public_pages/about/morelearn/blogDetail";

class App extends Component {
	state = {
		user: {
			firstName: "",
			lastName: "",
			emailAddress: "",
		},
		footer_img: logo,
	};

	async componentDidMount() {
		const user = await getCurrentUser();

		if (user.sub !== null && user.sub !== undefined) {
			this.setState({ user });
			console.log("User");
			console.log(user.sub);

			//get the user profile
			//alert(user.sub);

			const { data: profile } = await getCurrentUserProfile(user.sub);
			console.log(profile);
			const currentUserProfile = {
				firstName: profile.firstName,
				lastName: profile.lastName,
			};
			console.log("Profile");
			console.log(currentUserProfile);
			//alert(currentUserProfile.firstName);
			this.setState({ user: currentUserProfile });
		}
	}

	render() {
		const { user, footer_img } = this.state;

		return (
			<React.Fragment>
				<ToastContainer />
				<NavBar user={user} />
				<div className='content'>
					<Switch>
						<Route path='/' exact component={HomePage} />
						<ProtectedRoute path='/game' component={Game} />
						{/* To test Leaderboard then will use it for purchase history ProtectedRoute*/}
						<Route path='/leaderboard' component={Leaderboard} />
						<Route path='/learngame' component={Learn} />
						<Route path='/login' component={LoginPage} />
						<Route path='/register' component={RegistrationPage} />
						<Route path='/ourteam' component={AboutTeam} />
						<Route path='/aboutplayers' component={AboutPlayers} />
						<Route path='/gamestore' component={Store} />
						<Route path='/blogdetail/:tutorialTitle' component={BlogDetail} />

						<Route path='/logout' component={LogOut} />
						<Route path='/notfound' component={NotFound} />
						<Redirect to='/notfound' />
					</Switch>
				</div>
				{footer_img && <GeneralFooter footer_img={footer_img} />}
			</React.Fragment>
		);
	}
}

export default App;
