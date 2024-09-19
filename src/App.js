import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import JobsPage from './JobsPage';
import EmployerRegisterPage from './EmployerRegisterPage'; // Import the employer registration page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/employer-register" element={<EmployerRegisterPage />} /> {/* Employer Registration Route */}
      </Routes>
    </Router>
  );
}

export default App;