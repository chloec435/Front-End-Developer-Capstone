import React from 'react';
import logo from '../src/images/Asset 20@4x.png';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-component">
                <div>
                    <img src={logo} alt="Little Lemon Logo" className="footer-logo" width="75" height="125"/>
                </div>
                <div className="contact">
                    <h4>Contact Us</h4>
                    <p>Address:123 Chicago Loop, Chicago, IL 60601</p>
                    <p>Phone: (312) 456-7890</p>
                    <p>Email: littlelemon123@gmail.com</p>
                </div>
                <div className="socials">
                    <h4>Social Media</h4>
                    <ul>
                        <li><a href="#">Website</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">X</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;