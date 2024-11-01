import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNumber: "",
    location: "",
    experience: "",
    resume: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataObj = new FormData();
    formDataObj.append('fullName', formData.fullName);
    formDataObj.append('email', formData.email);
    formDataObj.append('password', formData.password);
    formDataObj.append('mobileNumber', formData.mobileNumber);
    formDataObj.append('location', formData.location);
    formDataObj.append('experience', formData.experience);
    formDataObj.append('resume', formData.resume);
  
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        body: formDataObj,
      });
      const data = await response.json();
      if (response.ok) {
        console.log('User registered successfully');
        console.log(data);
        navigate('/' ,{ state: { jobSuggestions: data.jobSuggestions || [] } });
      } else {
        console.error('Failed to register user');
      }
    } catch (err) {
      console.error('Error during registration:', err);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            <strong>JobPortal</strong>
          </a>
          <div className="ml-auto">
            <p>
                    Already registered? <a href="#" onClick={() => navigate('/login')}>Login</a> here
                  </p>
          </div>
        </div>
      </nav>

      <div className="register-background">
        <div className="container">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-lg-6 col-md-8">
              <div className="card p-4 shadow-lg rounded-lg">
                <div className="text-center mb-4">
                  <h2>Register</h2>
                  
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label>Full Name:</label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

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

                  <div className="form-group mb-3">
                    <label>Password:</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Mobile Number:</label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      className="form-control"
                      placeholder="Enter your mobile number"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Location:</label>
                    <input
                      type="text"
                      name="location"
                      className="form-control"
                      placeholder="Enter your location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Experience (Years):</label>
                    <input
                      type="number"
                      name="experience"
                      className="form-control"
                      placeholder="Enter your experience in years"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Upload Resume:</label>
                    <input
                      type="file"
                      name="resume"
                      className="form-control"
                      accept=".pdf, .doc, .docx"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100 mt-3">
                    Register
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

export default RegisterPage;
