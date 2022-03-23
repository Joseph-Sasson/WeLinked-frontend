import React, {useState} from 'react';
import '../App.css';

function Account({user, setLogin}) {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [userForm, setUserForm] = useState({
    name: user.name,
    username: user.username,
    company_name: user.company.company_name,
    email: user.email,
    password: user.password
  })

  const handleChange = e =>{
    const name = e.target.name
    const value = e.target.value
    setUserForm({
      ...userForm, [name]:value
    })
  }
  
  const submitChange = (e) =>{
    if (window.confirm("Are you sure you want to update this account?"))
    fetch(`http://localhost:9292/users/${user.id}`,{
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userForm)
    })
  }

  const handleDelete = () =>{
    if (window.confirm("Are you sure you want to delete this account?"))
    fetch(`http://localhost:9292/users/${user.id}`, {
      method: 'DELETE'},
      setLogin(false))}

  return(
    <div className = "auth-inners">
      <h2 id = 'header'>Account Information</h2>
      <ul className = 'account-info' >
        <li className = 'account-list'>Name:
          <input 
            type = 'text'
            name = 'name'
            value = {userForm.name}
            onChange = {handleChange}
          />
        </li>

        <li className = 'account-list'>Username:
        <input 
            type = 'text'
            name = 'username'
            value = {userForm.username}
            onChange = {handleChange}
          />
        </li>

        <li className = 'account-list'>Company Name:
        <input 
            type = 'text'
            name = 'company_name'
            value = {userForm.company_name}
            onChange = {handleChange}
          />
        </li>

        <li className = 'account-list'>Email Address:
        <input 
            type = 'text'
            name = 'email'
            value = {userForm.email}
            onChange = {handleChange}
          />
        </li>

        <li className = 'account-list'>Password:
          <input
          type={isRevealPwd ? "text" : "password"}
          name = 'password'
          value = {userForm.password}
          onChange = {handleChange}
          />
          <br/>
          <i className="password-pointer" onClick={() => setIsRevealPwd(!isRevealPwd)}>Show Password</i>
        </li>

      </ul>
      <button onClick = {handleDelete}>Delete Account</button>
      <button className = 'change-button' onClick = {submitChange}>Update Account</button>
    </div>
  );
}

export default Account