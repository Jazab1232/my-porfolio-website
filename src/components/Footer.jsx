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
                    <i className="fa-solid fa-mobile-screen-button"></i>
                    <div>
                        <h3>Contact(WhatsApp)</h3>
                        <p>+92 345 2691072</p>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <i className="fa-regular fa-envelope"></i>
                    <div>
                        <h3>Email</h3>
                        <p>jazabshoukat72@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='footerIcon' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '30px' }} >
                <p>Social - Link</p>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', paddingTop: '30px' }}>
                    <a href="https://www.linkedin.com/in/jazab-ahmad-079863236/" target='_blank'>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://x.com/jazab_ahmad_?t=LG1zQtnFu3da93m7e8vZbg&s=09" target='_blank'>
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/ig.ninjamvp?igsh=MWs4bWw3amV5Mmg2dQ==" target='_blank'>
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://github.com/Jazab1232" target='_blank'>
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
