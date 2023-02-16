import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-12 bg-base-200 text-base-content">
            <div>
                <img src='/logo.png' width="50%" />
                <h3 className='text-3xl'>TaskMaster</h3>
                <p>Task Management System</p>
            </div>
            {/* <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Marketing</a>
            </div>
            <div>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
            </div> */}
            <div className='pt-4'>
                <span className="footer-title">Legal</span>
                <Link to="/terms">Terms of use</Link>
                <Link to="/privacy">Privacy policy</Link>
                {/* <a className="link link-hover">Cookie policy</a> */}
            </div>
            <div><h1 className='pl-11 pt-20'>Copyright © 2023 TaskMaster</h1></div>
        </footer>
    );
};

export default Footer;