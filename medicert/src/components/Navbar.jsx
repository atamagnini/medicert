import { useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <button className="nav-button" onClick={() => navigate("/dashboard")}>DASHBOARD</button>
            <button className="nav-button" onClick={() => navigate("/prescription")}>PRESCRIPTIONS</button>
            <button className="nav-button" onClick={() => navigate("/certificate")}>CERTIFICATES</button>
        </div>
    );
};

export default Navbar;