import React, {useState} from 'react';
import '../App.css';

function Account({user}) {
  const [isRevealPwd, setIsRevealPwd] = useState(false);



  const handleDelete = (userId) =>{
    if (window.confirm("Are you sure you want to delete this account?"))
    console.log('account deleted')
  }

  const handleClick = () => {
    console.log(user.name)
  }

  return(
    <>
      <h2 id = 'header'>Account Information</h2>
      <ul className = 'account-info' >
        <li className = 'account-list'>Name:
          <span value={user.name} onChange={e => console.log(e.target.value)}> {user.name}</span>
          <span className = 'change-button' onClick={() => console.log(user.name)}>Change</span>
        </li>
        <li className = 'account-list'>Username:
          <span> {user.username}</span>
          <span className = 'change-button' onClick={() => console.log(user.username)}>Change</span>
        </li>
        <li className = 'account-list'>Company Name:
          <span> {user.company_name}</span>
          <span className = 'change-button'>Change</span>
        </li>
        <li className = 'account-list'>Email Address:
          <span> {user.email}</span>
          <span className = 'change-button'>Change</span>
        </li>
        <li className = 'account-list'>Password:
          <input className = 'password-form'
          type={isRevealPwd ? "text" : "password"}
          defaultValue = {user.password}/>
          <i onClick={() => setIsRevealPwd(!isRevealPwd)}>Show Password</i>
          <span className = 'change-button'>Change</span>
        </li>
      </ul>
      <button onClick = {handleDelete}>Delete Account</button>
    </>
  );
}

export default Account