import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { getCurrentUser } from "../../../services/authentication/authentication";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
	return (
		<Route
			path={path}
			{...rest}
			render={(props) => {
				if (!getCurrentUser())
					return (
						<Redirect
							to={{
								pathname: "/login",
								state: { from: props.location },
							}}
						/>
					);
				return Component ? <Component {...props} /> : render(props);
			}}
		/>
	);
};

export default ProtectedRoute;
