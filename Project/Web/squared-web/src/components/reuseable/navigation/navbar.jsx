import React, { Component, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../images/squared-logo.png";
import styled from "styled-components";
import "../../../index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	solid,
	regular,
	brands,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const NavBar = ({ user }) => {
	//On load get the profile info from me

	//On load get the profile info from me
	//mobile start
	const COLORS = {
		primaryDark: "#2f5bea",
		primaryLight: "#B6EDC8",
		menuBackground: "#eab676",
		textPrimaryColor: "#ffff",
	};

	const MenuLabel = styled.label`
		background-color: ${COLORS.primaryDark};
		position: fixed;
		top: 0.5rem;
		right: 0.5rem;
		border-radius: 50%;
		height: 50px;
		width: 50px;
		cursor: pointer;
		z-index: 1000;

		box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
		text-align: center;
	`;

	const NavBackground = styled.div`
		position: fixed;
		top: 6.5rem;
		right: 6.5rem;
		background-image: radial-gradient(
			${COLORS.primaryDark},
			${COLORS.menuBackground}
		);
		height: 6rem;
		width: 6rem;
		border-radius: 50%;
		z-index: 600;
		transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
		transition: transform 0.8s;
	`;

	const Icon = styled.span`
		position: relative;
		background-color: ${(props) => (props.clicked ? "transparent" : "white")};
		width: 1.5rem;
		height: 1px;
		display: inline-block;
		margin-top: 1.5rem;
		transition: all 0.3s;
		&::before,
		&::after {
			content: "";
			background-color: white;
			width: 1.5rem;
			height: 1px;
			display: inline-block;
			position: absolute;
			left: 0;
			transition: all 0.3s;
		}
		&::before {
			top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
			transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
		}
		&::after {
			top: ${(props) => (props.clicked ? "0" : "0.8rem")};
			transform: ${(props) =>
				props.clicked ? "rotate(-135deg)" : "rotate(0)"};
		}
		${MenuLabel}:hover &::before {
			top: ${(props) => (props.clicked ? "0" : "-1rem")};
		}
		${MenuLabel}:hover &::after {
			top: ${(props) => (props.clicked ? "0" : "1rem")};
		}
	`;

	const Navigation = styled.nav`
		height: 100vh;
		position: fixed;
		top: 0;
		right: 0;
		z-index: 600;
		width: ${(props) => (props.clicked ? "100%" : "0")};
		opacity: ${(props) => (props.clicked ? "1" : "0")};
		transition: width 0.8s, opacity 0.8s;
	`;

	const List = styled.ul`
		position: absolute;
		list-style: none;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 100%;
	`;
	const ItemLink = styled(NavLink)`
		display: inline-block;
		font-size: 2rem;
		font-weight: 500;
		text-decoration: none;
		color: ${COLORS.textPrimaryColor};
		padding: 0.5rem 2rem;
		background-image: linear-gradient(
			120deg,
			transparent 0%,
			transparent 50%,
			#fff 50%
		);
		background-size: 240%;
		transition: all 0.4s;
		&:hover,
		&:active {
			background-position: 100%;
			color: ${COLORS.primaryDark};
			transform: translateX(1rem);
		}
	`;

	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	//mobbile end

	return (
		<React.Fragment>
			{/* Start Preloader Area */}
			<div hidden className='preloader'>
				<div className='preloader'>
					<span></span>
					<span></span>
				</div>
			</div>
			{/* End Preloader Area */}
			{/* Start Navbar Area */}
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='container'>
					<div className='logo'>
						{/*<a href='index.html'>
							<h3>Squared</h3>
	</a>*/}
						<Link to={"/"}>
							<img src={logo} style={{ width: "200px" }} />
						</Link>
					</div>

					<div className='mobile-nav'>
						<MenuLabel
							id='mobile-nav'
							className='navbar-toggler'
							htmlFor='navi-toggle'
							onClick={handleClick}>
							<FontAwesomeIcon
								style={{ color: "white", paddingTop: "10px" }}
								icon={solid("bars")}
							/>
						</MenuLabel>
						<NavBackground clicked={click}>&nbsp;</NavBackground>
					</div>

					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<Link className='nav-link' to='/'>
									Home
								</Link>
							</li>

							<li className='nav-item'>
								<Link className='nav-link' to='/game'>
									Play Game
								</Link>
							</li>

							<li className='nav-item'>
								<Link className='nav-link' to='/leaderboard'>
									Leaderboard
								</Link>
							</li>

							<li className='nav-item'>
								<Link className='nav-link' to='/learngame'>
									Learn
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/gamestore'>
									Store
								</Link>
							</li>

							<li className='nav-item'>
								<Link className='nav-link' to='/ourteam'>
									Our Team
								</Link>
							</li>
						</ul>
						<div className='others-option'>
							<div className='d-flex align-items-center'>
								<div className='option-item'>
									<Link to='/register' className='default-btn'>
										Sign Up
									</Link>
								</div>
							</div>
						</div>
						&nbsp;
						<div className='others-option'>
							<div className='d-flex align-items-center'>
								<div className='option-item'>
									<Link to='/login' className='default-btn'>
										Login
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
			{/* End Navbar Area */}
			{/* NAVIGATION */}
			<header id='nav-header'>
				<nav
					id='nav-bar'
					className='top-bar fluid-width block-color nav-center sticky-nav animation fadeInDown'>
					<div id='nav-wrapper'>
						<div></div>

						<div className='clearboth'></div>

						<div className='btn-box'>
							<Navigation clicked={click}>
								{!user.sub && (
									<List>
										<li>
											<ItemLink
												onClick={handleClick}
												to='/'
												className='sub-menu-item'>
												Home
											</ItemLink>
										</li>

										<li>
											<ItemLink
												onClick={handleClick}
												to='/game'
												className='sub-menu-item'>
												Play Game
											</ItemLink>
										</li>
										<li>
											<ItemLink
												onClick={handleClick}
												to='/gamestore'
												className='sub-menu-item'>
												Store
											</ItemLink>
										</li>
										<li>
											<ItemLink
												onClick={handleClick}
												to='/leaderboard'
												className='sub-menu-item'>
												{" "}
												Leaderboard
											</ItemLink>
										</li>
										<li>
											<ItemLink
												onClick={handleClick}
												to='/learngame'
												className='sub-menu-item'>
												Learn
											</ItemLink>
										</li>
										<li>
											<ItemLink
												onClick={handleClick}
												to='/ourteam'
												className='sub-menu-item'>
												Our Team
											</ItemLink>
										</li>
										<li>
											<ItemLink
												onClick={handleClick}
												to='/register'
												className='sub-menu-item'>
												Sign Up
											</ItemLink>
										</li>

										<li>
											<ItemLink
												onClick={handleClick}
												to='/login'
												className='sub-menu-item'>
												Login
											</ItemLink>
										</li>
									</List>
								)}
								{user.sub && (
									<List>
										<li>
											<ItemLink
												onClick={handleClick}
												to='/'
												className='sub-menu-item'>
												Home
											</ItemLink>
										</li>

										<li>
											<ItemLink
												onClick={handleClick}
												to='/game'
												className='sub-menu-item'>
												Play Game
											</ItemLink>
										</li>
										<li>
											<ItemLink
												onClick={handleClick}
												to='/gamestore'
												className='sub-menu-item'>
												Store
											</ItemLink>
										</li>
										<li>
											<ItemLink
												onClick={handleClick}
												to='/leaderboard'
												className='sub-menu-item'>
												{" "}
												Leaderboard
											</ItemLink>
										</li>
										<li>
											<ItemLink
												onClick={handleClick}
												to='/learngame'
												className='sub-menu-item'>
												Learn
											</ItemLink>
										</li>
										<li>
											<ItemLink
												onClick={handleClick}
												to='/logout'
												className='sub-menu-item'>
												Sign Out
											</ItemLink>
										</li>
									</List>
								)}
							</Navigation>
						</div>
					</div>
				</nav>
			</header>{" "}
			{/*END of NAVIGATION */}
		</React.Fragment>
	);
};

export default NavBar;
