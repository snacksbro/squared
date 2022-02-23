import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
//importing pages
import Game from './components/game/game'
import HomePage from './components/public_pages/homepage';
import NotFound from './components/error/notfound';
import NavBar from './components/reuseable/navigation/navbar';
import Leaderboard from './components/game/leaderboard';
import Learn from './components/public_pages/learngame';


class App extends Component {
  state ={

  }

  render(){

  return (
    <React.Fragment>
    <NavBar />
    <div className="content">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/game" component={Game} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/learngame" component={Learn} />
        
        <Route path="/notfound" component={NotFound} />
          <Redirect to="/notfound" />
      </Switch>
    </div>
    {/*{footer_img&&
   Footer will go here <GeneralFooter footer_img={footer_img}/> 
  }  */}
  </React.Fragment>
  );

}
}

export default App;
