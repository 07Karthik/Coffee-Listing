import React, { useEffect, useRef } from 'react'
import "./Item.css"
import star_fill from "../../assets/star_fill.svg"
import star from "../../assets/star.svg"

const Item = ({name, image, price, rating, votes, avaliable, popular}) => {
  


  return (
    <div className='item'>
      <div className="big-img">
        <img className='main-img' src={image} alt="" />
        {popular && (<div className={"item-popular"}>
          <p>Popular</p>
        </div>)}
      </div>

      <div className="item-name">
        <h3>{name}</h3>
        <div className="item-price">
          <p>{price}</p>
        </div>
      </div>
      <div className="item-rating">
        <div className='item-rating-1'>
          <img src={votes > 0? star_fill:star} alt="" />
          <p>{rating} <span>({votes} votes)</span></p>
        </div>
        {!avaliable && <p style={{color:"#ED735D"}}>Sold out</p>}

      </div>
    </div>
  )
}

export default Item
