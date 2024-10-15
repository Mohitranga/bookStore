import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess('');
        setError('');

        emailjs.send('service_2z01ayk', 'template_kbm09nb', formData, 't228JNPN5pne0th-T')
            .then((response) => {
                setSuccess('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form
            }, (err) => {
                setError('Failed to send message. Please try again.');
            });
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Contact Me</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ ...styles.input, height: '100px' }}
                    ></textarea>
                </div>
                <button type="submit" style={styles.button}>Send Message</button>
            </form>
            {success && <p style={styles.successMessage}>{success}</p>}
            {error && <p style={styles.errorMessage}>{error}</p>}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '500px',
        margin: '100px 700px 100px 700px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
        fontWeight:'bold',
        fontSize:'24px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    label: {
        marginBottom: '5px',
        fontWeight: 'bold',
        color: '#555',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        transition: 'border-color 0.3s',
        '&:focus': {
            borderColor: '#007BFF',
            outline: 'none',
        },
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007BFF',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
    successMessage: {
        color: 'green',
        textAlign: 'center',
        marginTop: '10px',
    },
    errorMessage: {
        color: 'red',
        textAlign: 'center',
        marginTop: '10px',
    },
};

export default ContactMe;
