import React from "react";
import { useLocation, Link } from 'react-router-dom';

/**
 * The header component 
 * @returns the eader component 
 */
export default function Header() {

    function CreateLogo() {
        const location = useLocation();
        if (window.location.pathname === "/") {
            return <div className = "logo">OgCiSum</div>;
        } else {
            return <div className = "logo">← OgCiSum</div>;
        }
    }
       
    return (
        <header className="page-header">
            <Link to="/">
                {CreateLogo()}
            </Link>
            <p>Create {'&'} Share Samples, Listen In Mobile App!</p>
        </header>
    );

}