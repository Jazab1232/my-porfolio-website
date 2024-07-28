import React from 'react'
import '../styles/servicesCard2.css'
export default function ServicesCard2({title,content}) {
    return (
        <div className='servicesCard2'>
            <div>
                <i class="fa-solid fa-desktop"></i>
            </div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}
