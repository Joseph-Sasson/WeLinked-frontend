import React, {useState} from "react";
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

function Login ({setToken}){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          email,
          password
        });
        setToken(token);
      }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="form-control" placeholder="Enter Email" onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter Password" onChange={e => setPassword(e.target.value)}/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">Password?</a>
            </p>
        </form>
    )}

    Login.propTypes = {
        setToken: PropTypes.func.isRequired
      }

    export default Login