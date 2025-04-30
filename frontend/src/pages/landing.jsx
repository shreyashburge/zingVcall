import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../App.css"

export default function LandingPage() {

    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>ZingvCall</h2>
                </div>
                <div className='navlist'>
                    {/* SignUp and Login buttons */}
                    <Link to="/auth" className="ctaButton">SignUp</Link>
                    <Link to="/auth" className="ctaButton">Login</Link>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div className="leftSection">
                    <h1>Connect with your loved Ones</h1>
                    <p>Cover a distance by Zing Video Call</p>
                    <Link to="/auth" className="ctaButton">SignUp Now</Link>
                </div>
                <div className="rightSection">
                    <img src="/mobile.png" alt="mobile" />
                </div>
            </div>
        </div>
    )
}
