import React from 'react';
import '../App.css';


function UserCard({user}) {

  return(
    <>
      <span className = 'user-card'>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email Address: {user.email}</p>
        <p>Company: {user.company.company_name}</p>
      </span>
    </>
  );
}

export default UserCard