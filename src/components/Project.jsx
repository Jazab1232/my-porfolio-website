import React from 'react'
import Card from './Card'
import '../styles/project.css'

export default function Project() {
    return (
        <div className="project">
            {/* <p>Explore our done</p> */}
            <h1>Projects</h1>
            <hr style={{ border: 'none', height: '1px', backgroundColor: '#54ADA3' }} />
            <div className="cardContainer">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    )
}
