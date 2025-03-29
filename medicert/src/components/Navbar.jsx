import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DashboardPage from "../pages/DashboardPage";
import PrescriptionPage from "../pages/PrescriptionPage";
import CertificatePage from "../pages/CertificatePage";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <button className="nav-button" onClick={() => navigate("/dashboard")}>Dashboard</button>
            <button className="nav-button" onClick={() => navigate("/prescription")}>Prescription</button>
            <button className="nav-button" onClick={() => navigate("/certificate")}>CertificatePage</button>
        </div>
    );
};

export default Navbar;