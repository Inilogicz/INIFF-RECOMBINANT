
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';
import Logo from '../ui/Logo';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-ir-secondary text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1 flex flex-col items-start">
                        <Link to="/" className="flex items-center space-x-3 mb-4">
                            <img src="/logo.png" alt="" className="h-10" />
                            <span className="text-l font-bold">INIFF RECOMBINANT</span>
                        </Link>
                        <p className="text-gray-300 text-sm">
                            Accelerating Africa’s Scientific & Healthcare Innovation.
                        </p>
                         <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-300 hover:text-ir-primary transition-colors"><FaFacebook size={20} /></a>
                            <a href="#" className="text-gray-300 hover:text-ir-primary transition-colors"><FaTwitter size={20} /></a>
                            <a href="#" className="text-gray-300 hover:text-ir-primary transition-colors"><FaLinkedin size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Quick Links</h3>
                        <ul className="space-y-2">
                            {NAV_LINKS.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-300 hover:text-ir-primary transition-colors duration-300">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Contact Us</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start">
                                <span className="mt-1 mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg></span>
                                <span>312 Road, C-Close, House 1, Festac, Lagos, Nigeria</span>
                            </li>
                             <li className="flex items-start">
                                <span className="mt-1 mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">{/* Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}<path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg></span>
                                <span>+234 803 897 7010</span>
                            </li>
                             <li className="flex items-start">
                                <span className="mt-1 mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg></span>
                                <span>info@iniffrecombinant.com</span>
                            </li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Working Hours</h3>
                        <p className="text-gray-300">Mon–Sat | 9am – 6pm</p>
                    </div>

                </div>
                 <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} INIFF RECOMBINANT (iR). All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
