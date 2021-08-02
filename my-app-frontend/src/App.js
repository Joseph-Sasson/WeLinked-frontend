import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/Signup";
import Account from './components/Account';
import Home from './components/Home';

function setToken(userToken){
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken(){
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  // const [token, setToken] = useState()
  const token = getToken();

  if(!token) {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>WeLinked</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={()=><Login setToken={setToken}/>} />
            <Route path="/sign-in" component={()=><Login setToken={setToken}/>} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}
return (<Router>
  <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/home"}>WeLinked</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/home"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/accunt"}>My Account</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="auth-wrapper">
      <div className="auth-inner">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/account" component={Account} />
        </Switch>
      </div>
    </div>
  </div></Router>
);

}

export default App;