import React, {useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/Signup";
import Account from './components/Account';
import Home from './components/Home';
import useToken from './components/UseToken';

function App() {
  const { token, setToken } = useToken();

  useEffect(()=>{
    fetch('http://localhost:9292/users')
    .then(res=>res.json())
    .then(console.log)
  })

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
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={()=><Login setToken={setToken}/>} />
            <Route path='/' component={()=><Login setToken={setToken}/>} />
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
              <Link className="nav-link" to={"/account"}>My Account</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="auth-wrapper">
      <div className="auth-inner">
        <Switch>
          <Route path="/account" component={Account} />
          <Route path="/home" component={Home} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </div>
  </div></Router>
);

}

export default App;