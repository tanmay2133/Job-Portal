import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployerRegisterPage.css';

const EmployerRegisterPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
    website: '',
    industry: '',
    companySize: '',
    address: '',
    companyProfile: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      companyProfile: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employer registered:', formData);
    navigate('/login');
  };

  return (
    <div>
      {/* Navigation Tab */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            <strong>JobPortal</strong>
          </a>
          <div className="ml-auto">
            <a href="/employer-register" className="mr-4">For Employers</a>
            <button className="btn btn-outline-primary mr-2" onClick={() => navigate('/login')}>
              Login
            </button>
            <button className="btn btn-primary" onClick={() => navigate('/register')}>
              Register
            </button>
          </div>
        </div>
      </nav>

      <div className="employer-register-background">
        <div className="container">
          <div className="card employer-register-card">
            <h2 className="text-center mb-4">Employer Registration</h2>
            <form onSubmit={handleSubmit}>
              {/* Company Name */}
              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Contact Number */}
              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Company Website */}
              <div className="form-group">
                <label>Company Website</label>
                <input
                  type="text"
                  className="form-control"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </div>

              {/* Industry */}
              <div className="form-group">
                <label>Industry</label>
                <input
                  type="text"
                  className="form-control"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                />
              </div>

              {/* Company Size */}
              <div className="form-group">
                <label>Company Size</label>
                <select
                  className="form-control"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                >
                  <option value="">Select Company Size</option>
                  <option value="1-10">1-10 Employees</option>
                  <option value="11-50">11-50 Employees</option>
                  <option value="51-200">51-200 Employees</option>
                  <option value="201-500">201-500 Employees</option>
                  <option value="500+">500+ Employees</option>
                </select>
              </div>

              {/* Address */}
              <div className="form-group">
                <label>Company Address</label>
                <textarea
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              {/* Upload Company Profile */}
              <div className="form-group">
                <label>Upload Company Profile (PDF)</label>
                <input
                  type="file"
                  className="form-control"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>

            <div className="text-center mt-3">
              Already registered? <a href="/login">Login here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerRegisterPage;
