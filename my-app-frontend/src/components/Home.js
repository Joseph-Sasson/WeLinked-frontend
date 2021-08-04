import React, {useState} from 'react';
import '../App.css';


function Home({users}) {
  const [search, setSearch] = useState('')

  function onSearchChange (e){
    setSearch(e.target.value)
  }

  const searchDisplay = users.filter((user)=>{
    return (user.company_name.toLowerCase().includes(search.toLowerCase()))
  })

  return(
    <>
      <h2 id = 'header'>Home</h2>
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} value={search}/>
      <ul>
        {searchDisplay.map((user)=>(
          <li>
            Company: {user.company_name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home