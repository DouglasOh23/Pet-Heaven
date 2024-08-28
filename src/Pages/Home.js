import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home">
        <header className="home-header">
            <h1>Welcome to Pet Heaven</h1>
            <p>We care for abandoned pets and find them loving homes.</p>
            <p>Explore our site to find out more about our services and how you can get involved.</p>
        </header>

        <section className="home-links">
            <ul>
                <li>
                    <Link to="/Adoption" className="home-link">
                        <div className="home-button-container">
                            <button className="home-button">
                                <img src="/images/paw-outline.svg" alt="Adoption Icon" className="home-icon" />
                                Adopt
                            </button>
                            <p className="home-description">We have saved 1000 lost animals since the founding of our organization.</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/Support" className="home-link">
                        <div className="home-button-container">
                            <button className="home-button">
                                <img src="/images/construct-outline.svg" alt="Support Icon" className="home-icon" />
                                Support
                            </button>
                            <p className="home-description">Your support helps us continue our mission.</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/Release" className="home-link">
                        <div className="home-button-container">
                            <button className="home-button">
                                <img src="/images/heart-circle-outline.svg" alt="Release Icon" className="home-icon" />
                                Release
                            </button>
                            <p className="home-description">Help us give pets a new beginning.</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </section>
    </div>
);

export default Home;