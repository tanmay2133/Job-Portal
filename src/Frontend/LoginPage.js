import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css'; // Custom CSS for styling

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An error occurred. Please try again.");
    }
  };
  
  

  return (
    <div>
      {/* Top Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            <strong>JobPortal</strong>
          </a>
          <div className="ml-auto">
            <p>
                    Don't have an account? <a href="#" onClick={() => navigate('/register')}>Register</a> here
                  </p>
          </div>
        </div>
      </nav>
      
      {/* Login Form Section */}
      <div className="login-background">
        <div className="container">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-lg-6 col-md-8">
              <div className="card p-4 shadow-lg rounded-lg">
                <div className="text-center mb-4">
                  <h2>Login</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  {/* Email */}
                  <div className="form-group mb-3">
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="form-group mb-3">
                    <label>Password:</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary w-100 mt-3">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
