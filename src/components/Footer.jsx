import React from 'react'
import '../styles/footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footerContact">
                <div style={{ display: 'flex', gap: '20px' }}>
                    <i className="fa-solid fa-location-dot"></i>
                    <div>
                        <h3>Location</h3>
                        <p>Pakistan</p>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <i className="fa-solid fa-mobile-button"></i>
                    <div>
                        <h3>Contact(WhatsApp)</h3>
                        <p>+92 345 2691072</p>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <i className="fa-regular fa-envelope"></i>
                    <div>
                        <h3>Email</h3>
                        <p>jazabshoukat72@gmail.copm</p>
                    </div>
                </div>
            </div>
            <div className='footerIcon' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '30px' }} >
                <p>Social - Link</p>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', paddingTop: '30px' }}>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-github"></i>
                </div>
            </div>
        </div>
    )
}
