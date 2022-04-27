import React, { Component } from "react";
import { logout } from "../../services/authentication/authentication";

class LogOut extends Component {
	componentDidMount() {
		//remove token from local storage
		logout();
		//redirect user home page (force refresh)
		window.location = "/";
	}

	render() {
		return null;
	}
}

export default LogOut;
