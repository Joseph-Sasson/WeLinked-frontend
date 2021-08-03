import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

function Account() {

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
    </>
  );
}

export default Account