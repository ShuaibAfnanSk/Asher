import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import contactImg from '../../assets/images/contact-us.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    const [result, showResult] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;

        if (!validateEmail(email)) {
            setErrorMessage('Invalid email format');
            return;
        }

        emailjs.sendForm('service_rxwm6oa', 'template_t17xavp', e.target, 'GOkTFwdSiyN8xJ3MU')
            .then((result) => {
                console.log(result.text);
                showResult(true);
            }, (error) => {
                console.log(error.text);
            });

        form.reset();
        setErrorMessage('');
    };
    return (
        <section className='flex flex-col min-h-[50vh] p-8' id='contact'>
            <div className="flex flex-col gap-1 mb-5">
                <h1 data-aos='fade-up' className='text-4xl text-teal-950 font-extrabold'>Contact</h1>
                <p data-aos='fade-up'>Get in Touch</p>
            </div>
            <div className="flex flex-col lg:flex-row">
                {/* image */}
                <div data-aos='fade-up' className="flex items-center justify-center basis-1/2">
                    <img src={contactImg} alt="Contact Image" className='w-[70%]' />
                </div>

                {/* Form */}
                <div className="flex items-center justify-center basis-1/2">
                    <form action="" onSubmit={sendEmail} className='flex w-full md:w-[80%] flex-col gap-2'>
                        <input data-aos='fade-up' type="text" name='client_name' placeholder='Name' className='p-4 text-black bg-gray-200 outline-none shadow-sm rounded-full' required />
                        <input data-aos='fade-up' type="email" name='email' placeholder='Email' className='p-4 text-black bg-gray-200 outline-none shadow-sm rounded-full' required />
                        <textarea data-aos='fade-up' name="message" placeholder='your message' id="" cols="30" rows="10" className='p-4 text-black bg-gray-200 outline-none shadow-sm rounded-2xl' />
                        {errorMessage && <div className="text-red-600 text-xl">{errorMessage}</div>}
                        <div className="text-green-600 text-xl">{result ? <Result /> : null}</div>
                        <button data-aos='fade-up' type='submit' className='send-btn flex py-3 items-center justify-center px-4 bg-teal-950 hover:bg-teal-700 text-white rounded-full'>
                            Send Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;

const Result = () => {
    return (
        <p className='msg'>Message sent Successfully!</p>
    );
}