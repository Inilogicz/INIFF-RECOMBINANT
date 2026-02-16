import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../constants'; // Ensure this path is correct
// import Logo from '../ui/Logo'; // Logo component seems to be replaced by img tag, so this might not be needed
import { FiMenu, FiX } from 'react-icons/fi';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // CORRECTED: Added isOpen to the dependency array
    useEffect(() => {
        // Prevent body scroll when mobile menu is open
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        // Cleanup function to restore scroll
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]); // <--- CORRECTED: dependency array now includes isOpen

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
        exit: { opacity: 0, y: -20 }
    };

    const mobileMenuItemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <img src="/logo.png" alt="INIFF RECOMBINANT Logo" className="h-10"  /> {/* Added alt text */}
                    <span className={`text-xl font-bold transition-colors duration-300 ${scrolled || isOpen ? 'text-ir-secondary' : 'text-white'}`}>INIFF RECOMBINANT</span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `relative font-medium transition-colors duration-300 ${
                                    scrolled
                                        ? (isActive ? 'text-ir-primary' : 'text-ir-dark hover:text-ir-primary')
                                        : 'text-white hover:text-gray-200'
                                } after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-ir-primary after:transform after:scale-x-0 after:transition-transform after:duration-300 ${isActive ? 'after:scale-x-100' : 'group-hover:after:scale-x-100'}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className={`z-50 relative transition-colors duration-300 ${scrolled || isOpen ? 'text-ir-dark' : 'text-white'}`} aria-label={isOpen ? "Close menu" : "Open menu"}>
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="md:hidden absolute top-0 left-0 w-full bg-white shadow-lg pt-20" // pt-20 to clear space for the fixed header
                    >
                        <ul className="flex flex-col items-center space-y-6 py-8">
                            {NAV_LINKS.map((link) => (
                                <motion.li key={link.name} variants={mobileMenuItemVariants}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) => `text-xl font-medium ${isActive ? 'text-ir-primary' : 'text-ir-dark'}`}
                                        onClick={() => setIsOpen(false)} // Close menu on link click
                                    >
                                        {link.name}
                                    </NavLink>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;