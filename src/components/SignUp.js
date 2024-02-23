import React, { useState } from "react";
import Modal from "react-modal";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showSignup, setShowSignup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:5555/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Signup successful");
        setError("");
        setTimeout(() => {
          setShowSignup(false);
        }, 2000); 
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={() => setShowSignup(true)}>Add New Learners</button>
      <Modal
        isOpen={showSignup}
        onRequestClose={() => setShowSignup(false)}
        contentLabel="Signup Modal"
        style={{
          content: {
            width: "600px",
            height: "400px",
            margin: "auto",
          },
        }}
      >
        <button style={{backgroundColor: "red"}} onClick={() => setShowSignup(false)}>Close</button>
        <h2>Register Learner</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            First Name:
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label style={styles.label}>
            Last Name:
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label style={styles.label}>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <br />
          <label style={styles.label}>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label style={styles.label}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label style={styles.label}>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <label style={styles.label}>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {successMessage && <p style={styles.success}>{successMessage}</p>}
        </form>
      </Modal>
    </div>
  );
};


const styles = {
  form: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  label: {
    display: "block",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  success: {
    color: "green",
    marginTop: "10px",
  },
};


export default SignupForm;