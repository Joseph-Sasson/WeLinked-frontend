import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function Login ({login, setUser}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault();
        const loginData = {email, password}
        fetch('http://localhost:9292/sign-in', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        })
        .then(res=>res.json())
        .then(data=>{
          if (data.error){
            alert(data.error)}
            else
            {login(true)
            setUser(data)
              history.push('/home')}
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>

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

            <button type="submit" className="btn btn-primary btn-block">Login</button>
            <p className="forgot-password text-right">
            </p>
        </form>
    )}

    export default Login