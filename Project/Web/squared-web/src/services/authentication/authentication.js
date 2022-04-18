//Author: Keijaoh
//TODO: will contain login, register and token management here
//Version: 1.0
import http from "../../services/general/httpService";
import apiEndpoint from "../../constants/config.json";
import jwtDecode from "jwt-decode";

//declaring the constants
const tokenKey = "squ_token";

export async function authLoginUser(accountPayLoad) {
	const fullApiEndpoint = apiEndpoint.apiEndpoint + "/login_user";
	//emailAddress
	//passwordTxt
	const { data: token } = await http.post(fullApiEndpoint, {
		emailAddress: accountPayLoad.emailAddress,
		password: accountPayLoad.password,
	}); //need to get the response

	localStorage.setItem(tokenKey, token);

	return 
}

export function getCurrentUser() {
	try {
		//get current user
		const jwt = localStorage.getItem(tokenKey);
		return jwtDecode(jwt);
	} catch (ex) {
		return null;
	}
}

export function loginWithJwt(jwt) {
	localStorage.setItem(tokenKey, jwt);
}

export function logout() {
	localStorage.removeItem(tokenKey);
}

export function getJwt() {
	return localStorage.getItem(tokenKey);
}
