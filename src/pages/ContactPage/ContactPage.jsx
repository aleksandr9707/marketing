import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com'; // Import the emailjs-com library

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: '',
    });

    function handleChange(evt) {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            error: '',
        });
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const { name, number, email, message } = formData;
            const response = await axios.post('/api/contact', {
                name,
                number,
                email,
                message,
            });
            console.log('Form submitted:', response.data);
            setFormData({
                name: '',
                number: '',
                email: '',
                message: '',
            });

            // Call the sendEmail function to send email using emailjs-com
            sendEmail(evt);
            alert('Sent!')
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error if needed
        }
    }

    // Function to send email using emailjs-com
    function sendEmail(e) {
        e.preventDefault();

        // Replace placeholders with your actual email service details
        emailjs.sendForm('service_ukehlf3', 'template_n6vkdrm', e.target, 'S5H8GxjKskXRdTQ7w')
            .then((result) => {
                console.log('Email sent:', result);
                window.location.reload();
            })
            .catch((error) => {
                console.error('Email error:', error);
            });
    }

    return (
        <div className='container contact-page'>
            <h1 className='my-4'>Contact Us!</h1>
            <form className='contact-form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Name'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        id='number'
                        name='number'
                        value={formData.number}
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Phone Number'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Email Address'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Message'
                        required
                    />
                </div>
                <button type='submit'>Submit Request</button>
            </form>
        </div>
    );
}
