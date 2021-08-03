import React, {useState} from 'react';
import '../App.css';


function Home({data}) {
  const [search, setSearch] = useState('')

  function onSearchChange (e){
    setSearch(e.target.value)
  }

  
  return(
    <>
      <h2 id = 'header'>Home</h2>
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} value={search}/>
    </>
  );
}

export default Home