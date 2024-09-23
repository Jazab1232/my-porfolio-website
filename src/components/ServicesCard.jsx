import React from 'react'
import '../styles/servicesCard.css'

export default function ServicesCard({ title, content, icon }) {
    return (
        <div className='servicesCard'>
            <div className="serviceIcon">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}
