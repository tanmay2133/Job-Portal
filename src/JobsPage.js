import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './JobsPage.css';
import { useNavigate } from "react-router-dom";

const JobsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Top Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            <strong>JobPortal</strong>
          </a>
          <div className="ml-auto">
            <button className="btn btn-outline-primary mr-2" onClick={() => navigate('/login')}>
              Login
            </button>
            <button className="btn btn-primary" onClick={() => navigate('/register')}>
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Filter Section and Job Categories */}
      <div className="container mt-4">
        <div className="row">
          {/* Filters Column */}
          <div className="col-md-3">
            <div className="card mb-3 p-3 filter-card">
              <h5>Filters</h5>
              <form>
                {/* Location */}
                <div className="form-group mb-3">
                  <label>Location</label>
                  <input type="text" className="form-control" placeholder="Enter location" />
                </div>

                {/* Experience */}
                <div className="form-group mb-3">
                  <label>Experience</label>
                  <input type="text" className="form-control" placeholder="Enter experience" />
                </div>

                {/* Salary */}
                <div className="form-group mb-3">
                  <label>Salary</label>
                  <input type="text" className="form-control" placeholder="Enter salary" />
                </div>

                {/* Work Mode */}
                <div className="form-group mb-3">
                  <label>Work Mode</label>
                  <select className="form-control">
                    <option>Full-Time</option>
                    <option>Part-Time</option>
                    <option>Remote</option>
                  </select>
                </div>

                {/* Department */}
                <div className="form-group mb-3">
                  <label>Department</label>
                  <input type="text" className="form-control" placeholder="Enter department" />
                </div>

                <button type="submit" className="btn btn-primary w-100">Apply Filters</button>
              </form>
            </div>
          </div>

          {/* Job Categories */}
          <div className="col-md-9">
            <div className="card mb-4 p-3 category-card">
              <div className="d-flex justify-content-around">
                <button className="btn btn-outline-primary">IT Jobs</button>
                <button className="btn btn-outline-primary">Remote Jobs</button>
                <button className="btn btn-outline-primary">Sales Jobs</button>
                <button className="btn btn-outline-primary">HR Jobs</button>
              </div>
            </div>

            {/* Job Cards */}
            <div className="job-cards">
              {/* Example Job Card */}
              <div className="card mb-3 job-card">
                <div className="card-body">
                  <h5 className="card-title">Software Engineer</h5>
                  <p className="card-text">Company: TechCorp</p>
                  <p className="card-text">Location: New York, NY</p>
                  <a href="#" className="btn btn-primary">Apply Now</a>
                </div>
              </div>
              {/* Add more job cards as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
