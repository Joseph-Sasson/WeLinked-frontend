import React, {useEffect, useState} from 'react';
import '../App.css';

function Account({user}) {


  const handleDelete = (userId) =>{
    if (window.confirm("Are you sure you want to delete this account?"))
    console.log('account deleted')
  }


  return(
    <>
      <h2 id = 'header'>Account Information</h2>
      <ul className = 'account-info' >
        <li className = 'account-list'>Name: {user.name}
          <span className = 'change-button'>Change</span>
        </li>
        <li className = 'account-list'>Username: {user.username}
          <span className = 'change-button'>Change</span>
        </li>
        <li className = 'account-list'>Company Name: {user.company_name}
          <span className = 'change-button'>Change</span>
        </li>
        <li className = 'account-list'>Email Address: {user.email}
          <span className = 'change-button'>Change</span>
        </li>
        <li className = 'account-list'>Password: {user.password}
          <span className = 'change-button'>Change</span>
        </li>
      </ul>
      <button onClick = {handleDelete}>Delete Account</button>
    </>
  );
}

export default Account