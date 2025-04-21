import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PrescriptionPage from './pages/PrescriptionPage';
import CertificatePage from './pages/CertificatePage';

const AppContent = () => {
  const hideNavbar = useLocation().pathname === "/login";

  return (
      <div className="app-container">
        {!hideNavbar && <Navbar />}
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
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


export default App;
