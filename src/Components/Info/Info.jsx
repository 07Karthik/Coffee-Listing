import React, { useRef, useState } from 'react'
import "./Info.css"

const Info = ({setFilter}) => {
  const [active, setActive] = useState("all")

  const toggle = (button)=>{
        setFilter(button==="available")
        setActive(button)
        
  }
  return (
    <div className='info'>
      <h2>Our Collection</h2>
      <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
      <div className="buttons">
        <button style={{backgroundColor:active==="all"?"#6F757C":"transparent"}}  onClick={()=>{toggle("all")}}>All Products</button>
        <button style={{backgroundColor:active==="available"?"#6F757C":"transparent"}}  onClick={()=>{toggle("available")}}>Available Now</button>
      </div>
    </div>
  )
}

export default Info
