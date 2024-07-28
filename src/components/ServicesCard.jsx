import React from 'react'
import '../styles/servicesCard.css'

export default function ServicesCard() {
    return (
        <div className='servicesCard'>
            <div className="serviceIcon">
                <i class="fa-solid fa-desktop"></i>
            </div>
            <h3>Custom Web Development</h3>
            <p>We focus on creating unique full-stack Web Apps & Responsive Websites via
                HTML, CSS, JS, ReactJs, and Firebase. We use next-generation programming
                languages platforms on the Google Cloud Platform.</p>
        </div>
    )
}
