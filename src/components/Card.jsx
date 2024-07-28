import React from 'react'
import countriesApi from '../assets/countriesApi.png'
import '../styles/card.css'
import { Link } from 'react-router-dom'

export default function Card() {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={countriesApi} alt="" />
      </div>
      <div className="cardContent">
        {/* <div className="cardTech">
          <span>#React</span>
          <span>#Html</span>
          <span>#Css</span>
        </div> */}
        <div className="cardTitle">
          <p>Countries Api</p>
        </div>
        <div className="cardDesc">
          <ul>
            <li>Streamline your daily workflow and keep your thoughts organized.</li>
            <li>Create, edit, and manage notes effortlessly in a clean interface.</li>
            <li>Perfect for jotting down quick reminders, detailed meeting minutes, or creative ideas.</li>
          </ul>
        </div>
        <div className="cardLinks">
          <p>GitHub</p>
          <p>Live</p>
        </div>
      </div>
    </div>
  )
}
