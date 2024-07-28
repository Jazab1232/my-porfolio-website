import React, { useRef } from 'react'
import '../styles/contact.css'
import mailPng from '../assets/mail.png'
import emailjs from '@emailjs/browser';
export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cvmk18k', 'template_603oo1f', form.current, {
                publicKey: 'j5JpJIuKqpxM7plRu',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset()
                    alert('E-mail sent')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='contact'>
            <h2>Talk to Us</h2>
            <p>Feel free to send us your queries and details.</p>
            <div className="contactMain">
                <div className="contactImg">
                    <img src={mailPng} alt="" />
                </div>
                <div className="contactForm">
                    <form action="submit" ref={form} onSubmit={sendEmail}>
                        <h5>Name:</h5>
                        <input type="text" placeholder='Enter your name' />
                        <h5>Email:</h5>
                        <input type="text" placeholder='Enter your Email' />
                        <h5>Subject:</h5>
                        <textarea name="" id="" placeholder='Subject'></textarea>
                        <button>Send a message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
