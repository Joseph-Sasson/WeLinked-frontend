import React, {useState} from "react";

function Login (){

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [submittedData, setSubmittedData] = useState([]);

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setFormData({
            ...formData, [name]:value
    })}

    const handleSubmit = (e) =>{
        e.preventDefault()
        const newForm = {
            email: formData.email,
            password: formData.password
        }
        const dataArray = [...submittedData, newForm]
        setSubmittedData(dataArray)
        setFormData({
            email: '',
            password: ''
    })}

    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email Address</label>
                <input type="email" name='email' className="form-control" placeholder="Enter Email" value={formData.email} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name='password' className="form-control" placeholder="Enter Password" value={formData.password} onChange={handleChange}/>
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

    export default Login