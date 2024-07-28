import React from 'react'
import '../styles/skillBar.css'


export default function SkillBar({ img, level }) {
    return (
        <div className='skillBar'>
            <div style={{width:'45px',display:'flex',justifyContent:'center'}}>
                <img src={img} alt="" />
            </div>
            <div className="bar"></div>
            <p>{level}</p>
        </div>
    )
}
