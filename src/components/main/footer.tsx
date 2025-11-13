import React from 'react';
import '../../styles/footer.css';
import bwlogo from "../../assets/logowhite.png";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={bwlogo} alt="Logo" className="logo-icon" />
                    </div>
                    <div className="footer-text">
                        © 2025 LawMate. All rights reserved. | Connecting Sri Lanka with Legal Excellence
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;