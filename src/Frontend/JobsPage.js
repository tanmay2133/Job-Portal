import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './JobsPage.css';
import { useNavigate } from "react-router-dom";

const JobsPage = () => {
  const navigate = useNavigate();

  // Function to change the button text to "Applied" when clicked
  const handleApply = (e) => {
    e.target.innerText = 'Applied';
    e.target.disabled = true;
  };

  return (
    <div>
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

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <div className="card mb-3 p-3 filter-card">
              <h5>Filters</h5>
              <form>
                <div className="form-group mb-3">
                  <label>Location</label>
                  <input type="text" className="form-control" placeholder="Enter location" />
                </div>

                <div className="form-group mb-3">
                  <label>Experience</label>
                  <input type="text" className="form-control" placeholder="Enter experience" />
                </div>

                <div className="form-group mb-3">
                  <label>Salary</label>
                  <input type="text" className="form-control" placeholder="Enter salary" />
                </div>

                <div className="form-group mb-3">
                  <label>Work Mode</label>
                  <select className="form-control">
                    <option>Full-Time</option>
                    <option>Part-Time</option>
                    <option>Remote</option>
                  </select>
                </div>

                <div className="form-group mb-3">
                  <label>Department</label>
                  <input type="text" className="form-control" placeholder="Enter department" />
                </div>

                <button type="submit" className="btn btn-primary w-100">Apply Filters</button>
              </form>
            </div>
          </div>

          <div className="col-md-9">
            <div className="card mb-4 p-3 category-card">
              <div className="d-flex justify-content-around">
                <button className="btn btn-outline-primary">IT Jobs</button>
                <button className="btn btn-outline-primary">Remote Jobs</button>
                <button className="btn btn-outline-primary">Sales Jobs</button>
                <button className="btn btn-outline-primary">HR Jobs</button>
              </div>
            </div>

            <div className="job-cards">
              {/* Job Card 1 */}
              <div className="card mb-3 job-card">
                <div className="card-body">
                  <h5 className="card-title">Software Engineer</h5>
                  <p className="card-text">Company: TechCorp</p>
                  <p className="card-text">Location: New York, NY</p>
                  <button className="btn btn-primary" onClick={handleApply}>Apply Now</button>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="card mb-3 job-card">
                <div className="card-body">
                  <h5 className="card-title">Data Analyst</h5>
                  <p className="card-text">Company: DataCorp</p>
                  <p className="card-text">Location: Chicago, IL</p>
                  <button className="btn btn-primary" onClick={handleApply}>Apply Now</button>
                </div>
              </div>

              {/* Job Card 3 */}
              <div className="card mb-3 job-card">
                <div className="card-body">
                  <h5 className="card-title">Product Manager</h5>
                  <p className="card-text">Company: InnovateCo</p>
                  <p className="card-text">Location: San Francisco, CA</p>
                  <button className="btn btn-primary" onClick={handleApply}>Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
