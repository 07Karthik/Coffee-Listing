import React, { useEffect, useState } from 'react'
import "./ItemsCon.css"
import Item from '../Item/Item'

const ItemsCon = ({ filter }) => {
  const [list, setList] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data_list = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
        const response = await data_list.json()
        setList(response)
      }
      catch (err) {
        console.error("Something went wrong while fetching.... ", err)
      }

    }
    fetchData()
  }, [])

  return (
    <div className='items-container'>
      {list.filter((item) => ( filter ? item.available : true )).
        map((item) => (
          <Item
              key={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              rating={item.rating}
              votes={item.votes}
              popular={item.popular}
              avaliable={item.available} />
          
        ))}
    </div>
  )
}

export default ItemsCon
