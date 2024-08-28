import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Model from './Model';
import LoginForm from './LoginForm';
import SignUpForm from "./SignUpForm";

const Navbar = () => {
    const [showLoginModel, setShowLoginModel] = useState(false);
    const [showSignUpModel, setShowSignUpModel] = useState(false);

    const handleLoginClick = () => {
        setShowLoginModel(true);
        setShowSignUpModel(false); // Ensure only one Model is visible at a time
    };

    const handleSignUpClick = () => {
        setShowSignUpModel(true);
        setShowLoginModel(false); // Ensure only one Model is visible at a time
    };

    const handleCloseLoginModel = () => setShowLoginModel(false);
    const handleCloseSignUpModel = () => setShowSignUpModel(false);

    return (
        <header>
            <nav>
                <div className="NavContainer">
                <Link to="/"><img className="HomeLogo" src="/Images/PetHeavenLogo.png" alt="Pet Heaven Logo"/></Link>
                    <div className="NavLinks">
                        <ul>
                            <li><Link to="/Adoption"><img src="/Images/paw-outline.svg" alt="Adoption Icon" class="Icons"/>Adoption</Link></li>
                            <li><Link to="/Support"><img src="/Images/construct-outline.svg" alt="Support Icon" class="Icons"/>Support</Link></li>
                            <li><Link to="/Release"><img src="/Images/heart-circle-outline.svg" alt="Release Icon" class="Icons"/>Release Pet</Link></li>
                        </ul>
                    </div>
                    <div className="ButtonGroup">
                        <button onClick={handleLoginClick}>Login</button>
                        <button onClick={handleSignUpClick}>Sign Up<img src="/images/log-in-outline.svg" alt="Pet Heaven Logo" class="Icons"/></button>
                    </div>
                </div>
            </nav>
            {}
            <Model show={showLoginModel} handleClose={handleCloseLoginModel}>
                <LoginForm />
            </Model>
            <Model show={showSignUpModel} handleClose={handleCloseSignUpModel}>
                <SignUpForm />
            </Model>
        </header>
    );
};

export default Navbar;
