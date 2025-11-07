
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
                                <span className="mt-1 mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg></span>
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
