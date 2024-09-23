import React, { useEffect } from 'react'
import Card from './Card'
import '../styles/project.css'
import MenuBar from './MenuBar'
import { cardData } from './projectCardData'
import { useLocation } from 'react-router-dom'

export default function Project() {
    let colors = ['#7D478A', '#F4C925', '#57B1BC', '#EFA4A0', '#305FBB', '#57B1BD']
    function generateColor() {
        let randomIdx = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomIdx]
        return randomColor
    }
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="project">
            <p style={{ fontSize: '24px' }}>Explore our</p>
            <h1>Projects</h1>
            <hr style={{ border: 'none', height: '1px', backgroundColor: '#54ADA3' }} />
            <div className="cardContainer">
                {cardData.map((data,index) => (
                    <Card
                        key={index}
                        title={data.title}
                        desc={data.desc}
                        img={data.img}
                        link={data.link}
                        color={generateColor()}
                    />
                ))}
            </div>

            <MenuBar />

        </div>
    )
}
