import React, { useState } from 'react'
import Info from './Components/Info/Info'
import "./App.css"
import ItemsCon from './Components/ItemsCon/ItemsCon'

const App = () => {
  const [filter, setFilter] = useState(false)
  return (
    <div className='app container'>

      <Info setFilter={setFilter}/>
      <ItemsCon filter={filter}/>
    </div>
  )
}

export default App
