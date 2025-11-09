import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants'; // Ensure this path is correct
// import Logo from '../ui/Logo'; // Logo component seems to be replaced by img tag, so this might not be needed
import { 
    FaFacebook, 
    FaTwitter, 
    FaLinkedin,
    FaMapMarkerAlt, // Import for Address
    FaPhone,        // Import for Phone
    FaEnvelope,     // Import for Email
    FaWhatsapp      // Import for WhatsApp
} from 'react-icons/fa';

const Footer: React.FC = () => {
    // Define contact details
    const phoneNumber = "2348038977010"; // For wa.me link
    const displayPhoneNumber = "+234 803 897 7010"; // For display and tel: link
    const emailAddress = "info@iniffrecombinant.com";
    const address = "312 Road, C-Close, House 1, Festac, Lagos, Nigeria";
    const workingHours = "Mon–Sat | 9am – 6pm";

    return (
        <footer className="bg-ir-secondary text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: Logo, Description, Social Media */}
                    <div className="md:col-span-1 flex flex-col items-start">
                        <Link to="/" className="flex items-center space-x-3 mb-4">
                            <img src="/logo.png" alt="INIFF RECOMBINANT Logo" className="h-10" />
                            <span className="text-xl font-bold">INIFF RECOMBINANT</span> {/* Changed text-l to text-xl for consistency */}
                        </Link>
                        <p className="text-gray-300 text-sm">
                            Accelerating Africa’s Scientific & Healthcare Innovation.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-ir-primary transition-colors"><FaFacebook size={20} /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-300 hover:text-ir-primary transition-colors"><FaTwitter size={20} /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-ir-primary transition-colors"><FaLinkedin size={20} /></a>
                            {/* Added WhatsApp link */}
                            <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-300 hover:text-ir-primary transition-colors"><FaWhatsapp size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
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

                    {/* Column 3: Contact Us with Fa Icons */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Contact Us</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start">
                                <span className="mt-1 mr-2"><FaMapMarkerAlt size={20} /></span> {/* Replaced SVG with FaMapMarkerAlt */}
                                <span>{address}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mt-1 mr-2"><FaPhone size={20} /></span> {/* Replaced SVG with FaPhone */}
                                <a href={`tel:${displayPhoneNumber.replace(/\s/g, '')}`} className="text-gray-300 hover:text-ir-primary transition-colors">{displayPhoneNumber}</a>
                            </li>
                             <li className="flex items-start">
                                <span className="mt-1 mr-2"><FaEnvelope size={20} /></span> {/* Replaced SVG with FaEnvelope */}
                                <a href={`mailto:${emailAddress}`} className="text-gray-300 hover:text-ir-primary transition-colors">{emailAddress}</a>
                            </li>
                            {/* Adding a WhatsApp contact link here as well for consistency */}
                            <li className="flex items-start">
                                <span className="mt-1 mr-2"><FaWhatsapp size={20} /></span>
                                <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-ir-primary transition-colors">{displayPhoneNumber}</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Working Hours */}
                     <div>
                        <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Working Hours</h3>
                        <p className="text-gray-300">{workingHours}</p>
                    </div>

                </div>
                 {/* Copyright */}
                 <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} INIFF RECOMBINANT (iR). All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;