
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  
  const [beers, setBeers] = useState([])
  const [searchItem, setSearchItem] = useState('')

  useEffect(()=>{
    fetch('https://api.sampleapis.com/beers/ale')
    .then((response)=> response.json())
    .then((data)=> setBeers(data))
  }, [])

  const handleSearch = (e)=>{
    setSearchItem(e.target.value)
  }

  const filteredBeers = beers.filter((beer)=> beer.name.toLowerCase().includes(searchItem.toLowerCase()))

  return (
    <div className='app'>
      <h1>Beer List</h1>
      <input type="text" placeholder='Search for beer...' value={searchItem} onChange={handleSearch}/>
      <div className='beer-list'>
        {filteredBeers.map((beer)=>(
          <div key={beer.id} className='beer-card'>
            <img src={beer.image} alt={beer.name} className='beer-image' />
            <h2>{beer.name}</h2>
            <p>{beer.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
