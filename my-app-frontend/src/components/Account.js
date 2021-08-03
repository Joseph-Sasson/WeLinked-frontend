import React from 'react';
import '../App.css';

function Account({data}) {

  const name = data.map(userData=>{return userData.name })
  const username = data.map(userData=>{return userData.username })
  const company = data.map(userData=>{return userData.company_id })
  const email = data.map(userData=>{return userData.company_name })
  const password = data.map(userData=>{return userData.password })

  const handleDelete = (userId) =>{
    if (window.confirm("Are you sure you want to delete this account?"))
    console.log('account deleted')
  }


  return(
    <>
      <h2 id = 'header'>Account Information</h2>
      <ul className = 'account-info' >
        <li className = 'account-list'>Name: {name}
          <span className = 'change-button'>Change</span>
        </li>
        <li className = 'account-list'>Username: {username}
          <span className = 'change-button'>Change</span>
        </li>
        <li className = 'account-list'>Company Name: {company}
          <span className = 'change-button'>Change</span>
        </li>
        <li className = 'account-list'>Email Address: {email}
          <span className = 'change-button'>Change</span>
        </li>
        <li className = 'account-list'>Password: {password}
          <span className = 'change-button'>Change</span>
        </li>
      </ul>
      <button onClick = {handleDelete}>Delete Account</button>
    </>
  );
}

export default Account