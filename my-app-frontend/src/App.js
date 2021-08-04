import React, {useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/Signup";
import Account from './components/Account';
import Home from './components/Home';

function App() {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState('')
  const [users, setUsers] = useState([])

  
  useEffect(()=>{
    fetch('http://localhost:9292/users')
    .then(res=>res.json())
    .then(setUsers)
  },[])

  if(!login) {
  return (
    <Router>
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
              <Route path="/sign-up" component={()=><SignUp />} />
              <Route path="/sign-in" component={()=><Login login = {setLogin} setUser={setUser} />} />
              <Route path='/' component={()=><Login login = {setLogin} setUser={setUser}/>} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

  return (
    <Router>
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
                <li>
                  <Link className="nav-link" to={"/"} onClick={()=>setLogin(false)}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route path="/account" component={()=><Account user={user}/>} />
              <Route path="/home" component={()=><Home users={users}/>} />
              <Route path='/' component={()=><Home users={users}/>} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );

}

export default App;