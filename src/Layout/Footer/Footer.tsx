import React, { FC } from 'react';
import './Footer.scss'

const Footer:FC = () => {
    return (
        <div className='footer'>
            <div className="date">
            © {new Date().getFullYear()} Copyright Text
            </div>
            <div className="link">
            <a href="https://github.com/GHost7751" className="btn-join-git" target="_blank">GitHub</a>
            </div>
        </div>
    );
};

export default Footer;