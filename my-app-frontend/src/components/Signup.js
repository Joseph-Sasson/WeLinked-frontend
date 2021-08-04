import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function SignUp ({users, setUsers}) {

    const history = useHistory()

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        company: '',
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
            name: formData.name,
            username: formData.username,
            company: formData.company,
            email: formData.email,
            password: formData.password
        }
        const dataArray = [...submittedData, newForm]
        setSubmittedData(dataArray)
        setFormData({
            name: '',
            username: '',
            company: '',
            email: '',
            password: ''
    })
    history.push('/sign-in')
}


    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" placeholder="Full Name" name='name' value={formData.name} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" name='username' value={formData.username} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label>Company Name</label>
                <input type="text" className="form-control" placeholder="Company" name='company' value={formData.company} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="form-control" placeholder="Enter Email" name='email' value={formData.email} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter Password" name='password' value={formData.password} onChange={handleChange}/>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already Registered <span onClick={()=>history.push('/sign-in')} className="forgot-password text-right">Sign In?</span>
            </p>
        </form>
    )}

export default SignUp