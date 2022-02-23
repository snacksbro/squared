import React, { Component,useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
//import logo from '../../logo/logo@3x.png'
import styled from 'styled-components';
import '../../../index.css';

const NavBar = ({ user, currentProfile }) => {
  //On load get the profile info from me


  //On load get the profile info from me
//mobile start 
const COLORS = {
  primaryDark: '#f0394d',
  primaryLight: '#B6EDC8',
  menuBackground: '#eab676',
  textPrimaryColor: '#fff'
  
}

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
`

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
  transform: ${(props) => (props.clicked ? 'scale(80)' : 'scale(0)')};
  transition: transform 0.8s;
`

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? 'transparent' : 'white')};
  width: 1.5rem;
  height: 1px;
  display: inline-block;
  margin-top: 1.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: '';
    background-color: white;
    width: 1.5rem;
    height: 1px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? '0' : '-0.8rem')};
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }
  &::after {
    top: ${(props) => (props.clicked ? '0' : '0.8rem')};
    transform: ${(props) =>
      props.clicked ? 'rotate(-135deg)' : 'rotate(0)'};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? '0' : '-1rem')};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? '0' : '1rem')};
  }
`

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? '100%' : '0')};
  opacity: ${(props) => (props.clicked ? '1' : '0')};
  transition: width 0.8s, opacity 0.8s;
`

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`
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
`

const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


//mobbile end

  return (
    <React.Fragment>
      {/* NAVIGATION */}
      <header id="nav-header">
        <nav
          id="nav-bar"
          class="top-bar fluid-width block-color nav-center sticky-nav animation fadeInDown"
        >
          <div id="nav-wrapper">
      

            {/*<div id="mobile-nav">
              <i class="de-icon-menu"></i>
                    </div>*/}
                    <div >
              
                    </div>
                    {/*Will re-add the mobile menu when the website theme is added */}
            <div className="mobile-nav" hidden>
                      <MenuLabel id="mobile-nav" htmlFor="navi-toggle" onClick={handleClick}>
                      <i style={{ color: "white"}} class="de-icon-menu"></i>
                    
                      </MenuLabel>
                      <NavBackground clicked={click}>&nbsp;</NavBackground>
                    </div>

            <ul id="nav-menu">
              <li class="first-child">
                <Link to="/">Home</Link>
           
              </li>
        
              <li>
                <Link to="/game">Play Game</Link>
              </li>
              <li>
                <Link to="/leaderboard">Leaderboard</Link>
              </li>
              <li class="first-child split-margin">
                <Link to="/learngame">Learn</Link>
          
              </li>
       
              <li>
                <Link to="#">Login</Link>
              </li>
            
            </ul>

            <div class="clearboth"></div>

    <div className="btn-box">
                      <Navigation clicked={click}>

                      {!user &&
                                    <List>
                                  
                                        <li><ItemLink onClick={handleClick} to="/" className="sub-menu-item">Home</ItemLink></li>
                    
                                        <li><ItemLink onClick={handleClick} to="/game" className="sub-menu-item">Play Game</ItemLink></li>
                                        <li><ItemLink onClick={handleClick} to="/leaderboard" className="sub-menu-item"> Leaderboard</ItemLink></li>
                                        <li><ItemLink onClick={handleClick} to="/learngame" className="sub-menu-item">Learn</ItemLink></li>

                                        </List>
                                      }
                                    {user &&
                                        
                                        <List>
                                          <li><ItemLink onClick={handleClick} to="/" className="sub-menu-item">Home</ItemLink></li>
                    
                                        <li><ItemLink onClick={handleClick} to="/game" className="sub-menu-item">Play Game</ItemLink></li>
                                        <li><ItemLink onClick={handleClick} to="/leaderboard" className="sub-menu-item"> Leaderboard</ItemLink></li>
                                        <li><ItemLink onClick={handleClick} to="/learngame" className="sub-menu-item">Learn</ItemLink></li>
                                          <li>   <Link to="/logout" className="btn btn-danger">Sign Out</Link></li>
                                      </List>
                                    }
                            
                      </Navigation>
                    </div>
          </div>
        </nav>
      </header>{' '}
      {/* END of NAVIGATION */}
    </React.Fragment>
  )
}

export default NavBar