import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PrescriptionPage from './pages/PrescriptionPage';
import CertificatePage from './pages/CertificatePage';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="app-container">
        <Navbar />
        <div className="page-content">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/prescription" element={<PrescriptionPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
        </Routes>
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
