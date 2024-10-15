import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addbook = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    category: "",
    subcategory: "",
    image: "",
    link: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4001/book/submit", formData);
      console.log(response.data);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        title: "",
        category: "",
        subcategory: "",
        image: "",
        link: ""
      });
    } catch (error) {
      const data= error.response.data.message;
      console.error("There was an error submitting the form!", error);
      alert(data);
    }
  };

  const handleClose = () => {
    navigate("/books");
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={handleClose} style={styles.closeButton}>
          &times;
        </button>
        <h2 style={styles.heading}>Add a New Book</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Category:</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Subcategory:</label>
            <input
              type="text"
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Image (URL):</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Download Link:</label>
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    position: 'relative',
    width: '600px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontSize: '24px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputContainer: {
    marginBottom: '16px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '16px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
    transition: 'border 0.3s',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Addbook;
