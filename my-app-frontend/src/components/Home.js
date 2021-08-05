import React, {useState} from 'react';
import '../App.css';
import UserCard from './UserCard';


function Home({users}) {
  const [search, setSearch] = useState('')

  function onSearchChange (e){
    setSearch(e.target.value)
  }

  const searchDisplay = users.filter((user)=>{
    return (user.company.company_name.toLowerCase().includes(search.toLowerCase()))
  })

  return(
    <>
      <h2 id = 'header'>Home</h2>
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} value={search}/>
      <ul>
        {search !== '' && searchDisplay.map((user)=>(
          <UserCard user = {user} />
        ))}
      </ul>
    </>
  );
}

export default Home