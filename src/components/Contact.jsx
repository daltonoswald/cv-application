/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/form-styles.css';

function Contact({ name, email, phone, updateName }) {
    const [person, setPerson] = useState({ name: '', email: '', phone: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    if (isSubmitted) {
        return (
            <>
                    <button className="form-edit" onClick={editForm}>Edit Contact</button>
            </>
        )
    }

    function handleChange(e) {
        updateName(e.target.value, e.target.id);
        // setName(e.target.value);
    }

    function editForm(e) {
        e.preventDefault()
        setIsSubmitted(false);
    }

    function submitForm(e) {
        const newPerson = {...person, name: name, email: email, phone: phone}
        setPerson(newPerson)
        e.preventDefault();
        setIsSubmitted(true);
        console.log(`newPerson =`, newPerson);
    }

    return(
        <>
        <form className="form" onSubmit={submitForm}>
                <label>
                    Name: {' '}
                    <input
                    id="name"
                    key="name"
                    value={name}
                    placeholder="Name"
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Email: {' '}
                    <input
                    id="email"
                    key="email"
                    value={email}
                    placeholder="Email"
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Phone: {' '}
                    <input
                    id="phone"
                    key="phone"
                    value={phone}
                    placeholder="555-555-5555"
                    onChange={handleChange}
                    />
                </label>
                <button
                type="submit"
                >Submit
                </button>
            </form>
        </>
    )
}
export default Contact