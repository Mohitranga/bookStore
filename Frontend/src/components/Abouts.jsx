import React from 'react';

const Abouts = () => {
    const styles = {
        container: {
            maxWidth: '800px',
            margin: '120px 340px 200px 550px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
        heading: {
            textAlign: 'center',
            color: '#333',
        },
        paragraph: {
            lineHeight: '1.6',
            color: '#555',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>About Us</h2>
            <p style={styles.paragraph}>
                Welcome to bookStore , your go-to destination for all things books! We are passionate about reading and dedicated to providing a diverse selection of literature for readers of all ages and interests.
            </p>
            <p style={styles.paragraph}>
                Our mission is to foster a love for reading by offering a curated collection of books, from timeless classics to the latest bestsellers. We believe that every book has the power to transport readers to new worlds, inspire creativity, and ignite imaginations.
            </p>
            <p style={styles.paragraph}>
                At bookStore , we pride ourselves on our knowledgeable staff who are always ready to help you find your next great read. We also host events and book signings, creating a vibrant community for book lovers.
            </p>
            <p style={styles.paragraph}>
                Thank you for choosing us as your trusted bookstore. We look forward to sharing our love of books with you!
            </p>
        </div>
    );
};

export default Abouts;
