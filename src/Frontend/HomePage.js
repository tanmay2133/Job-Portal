import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Assuming jobSuggestionsString is passed through location state
  const jobSuggestionsString = location.state?.jobSuggestions || '';

  return (
    <div>
      {/* Navigation Bar */}
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

      {/* Search Section */}
      <div className="search-section">
        <div className="container text-center">
          <h1 className="mb-4">Find Your Dream Job</h1>
          <form>
            <div className="row justify-content-center mb-4">
              <div className="col-md-3">
                <input
                  type="text"
                  name="keyword"
                  placeholder="Job Title, Skills, or Keywords"
                  className="form-control"
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="form-control"
                />
              </div>
              <div className="col-md-2">
                <input
                  type="number"
                  name="experience"
                  placeholder="Experience (Years)"
                  className="form-control"
                />
              </div>
              <div className="col-md-2">
                <input
                  type="text"
                  name="salary"
                  placeholder="Expected Salary"
                  className="form-control"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Search Jobs
            </button>
          </form>
        </div>
      </div>

      {/* Job Suggestions Section */}
      <div className="container mt-3">
        <h3>Job Suggestions</h3>
        <div className="job-suggestions-box p-3 border rounded">
          {jobSuggestionsString ? (
            <p>{jobSuggestionsString}</p>
          ) : (
            <p>No job suggestions available yet. Start by searching for jobs above.</p>
          )}
        </div>
      </div>

      {/* Job Cards Section */}
      <div className="container mt-5">
        <h3 className="mb-4">Popular Jobs</h3>
        <div className="row">
          {/* Job Card 1 */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Software Engineer</h5>
                <p className="card-text">Location: Bangalore</p>
                <p className="card-text">Experience: 2-5 years</p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Data Analyst</h5>
                <p className="card-text">Location: Mumbai</p>
                <p className="card-text">Experience: 1-3 years</p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>

          {/* Job Card 3 */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Product Manager</h5>
                <p className="card-text">Location: Delhi</p>
                <p className="card-text">Experience: 3-6 years</p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Add more job cards as needed */}
      </div>
    </div>
  );
};

export default HomePage;
