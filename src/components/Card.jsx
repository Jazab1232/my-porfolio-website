import React from 'react'
import '../styles/card.css'

export default function Card({ img, title, desc, link, color }) {
  
  const cardStyle = {
    background: `linear-gradient(to top, #131213, ${color})`,
    color: '#fff',
  };
  return (
    <div className="card" style={cardStyle} >

      <div className="cardContent">
        <div className="cardTitle">
          <p>{title}</p>
        </div>
        <div className="cardDesc">
          <p>{desc}</p>
        </div>
      </div>
      <div className="cardImg">
        <img src={img} alt="" />
      </div>
      <div className="cardLinks">
        <a href={link} target="_blank" className='cardLink'>View more</a>
      </div>
    </div>
  )
}
