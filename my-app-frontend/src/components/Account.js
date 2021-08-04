import React, {useEffect, useState} from 'react';
import '../App.css';

function Account() {

  

  const handleDelete = (userId) =>{
    if (window.confirm("Are you sure you want to delete this account?"))
    console.log('account deleted')
  }


  return(
    <>
      <h2 id = 'header'>Account Information</h2>
      <ul className = 'account-info' >
        <li className = 'account-list'>Name:
          <span className = 'change-button'>Change</span>
        </li>
        <li className = 'account-list'>Username:
          <span className = 'change-button'>Change</span>
        </li>
        <li className = 'account-list'>Company Name:
          <span className = 'change-button'>Change</span>
        </li>
        <li className = 'account-list'>Email Address:
          <span className = 'change-button'>Change</span>
        </li>
        <li className = 'account-list'>Password:
          <span className = 'change-button'>Change</span>
        </li>
      </ul>
      <button onClick = {handleDelete}>Delete Account</button>
    </>
  );
}

export default Account