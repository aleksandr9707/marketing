import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

export default function ContactPage() {

    const [formData, setFormData] = useState({
        name:'',
        number:'',
        email:'',
        message:'',
    });

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const {name, number, email, password} = formData;
            const userForm = {name, number, email, password};
        } catch {

        }
       
    }

    function handleChange(evt) {
        setFormData({
            ...formData,
            [evt.target.name]:evt.target.value,
            error:''
        })
    }

    return(
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