import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Model from './Model';
import LoginForm from './LoginForm';
import SignUpForm from "./SignUpForm";
import pawoutline from "../Images/paw-outline.svg"
import contructoutline from "../Images/contruct-outline.svg"
import heartcircleoutline from "../Images/heart-circle-outline.svg"
import loginoutline from "../Images/log-in-outline.svg"
import PetHeavenLogo from "../Images/PetHeavenLogo.png"

const Navbar = () => {
    const [showLoginModel, setShowLoginModel] = useState(false);
    const [showSignUpModel, setShowSignUpModel] = useState(false);

    const handleLoginClick = () => {
        setShowLoginModel(true);
        setShowSignUpModel(false);
    };

    const handleSignUpClick = () => {
        setShowSignUpModel(true);
        setShowLoginModel(false);
    };

    const handleCloseLoginModel = () => setShowLoginModel(false);
    const handleCloseSignUpModel = () => setShowSignUpModel(false);

    return (
        <header>
            <nav>
                <div className="NavContainer">
                <Link to="/"><img className="HomeLogo" src={PetHeavenLogo} alt="Pet Heaven Logo"/></Link>
                    <div className="NavLinks">
                        <ul>
                            <li><Link to="/Adoption"><img src={pawoutline} alt="Adoption Icon" class="Icons"/>Adoption</Link></li>
                            <li><Link to="/Support"><img src={contructoutline} alt="Support Icon" class="Icons"/>Support</Link></li>
                            <li><Link to="/Release"><img src={heartcircleoutline} alt="Release Icon" class="Icons"/>Release Pet</Link></li>
                        </ul>
                    </div>
                    <div className="ButtonGroup">
                        <button onClick={handleLoginClick}>Login</button>
                        <button onClick={handleSignUpClick}>Sign Up<img src={loginoutline} alt="Pet Heaven Logo" class="Icons"/></button>
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
