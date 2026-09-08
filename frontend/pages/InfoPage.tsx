
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/ui/AnimatedPage';
import AnimatedSection from '../components/ui/AnimatedSection';
import Logo from '../components/ui/Logo';
import {
    FaMicroscope,
    FaBoxOpen,
    FaFlask,
    FaLaptopCode,
    FaTools,
    FaChalkboardTeacher,
    FaHandsHelping,
    FaWhatsapp,
    FaArrowRight,
} from 'react-icons/fa';
import { GiDna1 } from 'react-icons/gi';
import { IconType } from 'react-icons';

interface OfferingItem {
    label: string;
    icon: IconType;
}

const OFFERINGS: OfferingItem[] = [
    { label: 'Laboratory Equipment', icon: FaMicroscope },
    { label: 'Laboratory Consumables', icon: FaBoxOpen },
    { label: 'Reagents & Kits', icon: FaFlask },
    { label: 'Genomics Solutions', icon: GiDna1 },
    { label: 'Bioinformatics', icon: FaLaptopCode },
    { label: 'Laboratory Setup', icon: FaTools },
    { label: 'Training', icon: FaChalkboardTeacher },
    { label: 'Consultancy', icon: FaHandsHelping },
];

const WHATSAPP_NUMBER = '2348038977010';
const WHATSAPP_MESSAGE = "Hi, I'd like to know more about INIFF Recombinant Genomics' products and services.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

/** A quiet nod to the science: a molecule cluster, low-opacity, behind the hero. */
const MoleculeMark: React.FC = () => (
    <svg
        className="absolute -top-6 -right-10 w-56 h-56 text-teal-300/[0.14] pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
    >
        <line x1="100" y1="60" x2="50" y2="110" stroke="currentColor" strokeWidth="2" />
        <line x1="100" y1="60" x2="150" y2="100" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="110" x2="70" y2="165" stroke="currentColor" strokeWidth="2" />
        <line x1="150" y1="100" x2="140" y2="160" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="110" x2="150" y2="100" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="60" r="9" fill="currentColor" />
        <circle cx="50" cy="110" r="7" fill="currentColor" />
        <circle cx="150" cy="100" r="7" fill="currentColor" />
        <circle cx="70" cy="165" r="5" fill="currentColor" />
        <circle cx="140" cy="160" r="5" fill="currentColor" />
    </svg>
);

const InfoPage: React.FC = () => {
    return (
        <AnimatedPage>
            <div className="min-h-screen bg-white">

                {/* Hero */}
                <div className="relative bg-ir-secondary overflow-hidden">
                    <MoleculeMark />
                    <div className="relative max-w-md mx-auto pt-28 pb-14 px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src="/logo.png" alt="INIFF Recombinant Genomics" className="h-16 w-16 mx-auto mb-4" />
                            <h1 className="text-white font-bold text-2xl tracking-tight">INIFF Recombinant Genomics</h1>
                            <p className="text-ir-primary font-semibold text-sm tracking-wide mt-1">
                                Life Science Solutions
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-md mx-auto px-6 py-10">
                    <AnimatedSection>
                        <p className="text-gray-600 leading-relaxed text-center">
                            We equip Africa's laboratories and researchers with the instruments, reagents, and
                            expertise behind reliable science — from bench setup to genomic insight.
                        </p>
                    </AnimatedSection>

                    <h2 className="text-ir-secondary font-bold text-lg mt-10 mb-4">What We Offer</h2>
                    <motion.ul
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-1"
                    >
                        {OFFERINGS.map((item) => (
                            <motion.li
                                key={item.label}
                                variants={itemVariants}
                                className="flex items-center gap-3 py-2"
                            >
                                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-ir-primary/10 text-ir-primary">
                                    <item.icon size={16} />
                                </span>
                                <span className="text-ir-dark font-medium">{item.label}</span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <div className="mt-10 space-y-3">
                        <Link
                            to="/contact"
                            className="flex items-center justify-center gap-2 w-full bg-ir-primary hover:bg-opacity-90 text-white font-semibold py-3.5 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                        >
                            Make an Enquiry
                        </Link>
                        <a
                            href={WHATSAPP_HREF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-opacity-90 text-white font-semibold py-3.5 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                        >
                            <FaWhatsapp size={18} />
                            Chat on WhatsApp
                        </a>
                        <Link
                            to="/"
                            className="flex items-center justify-center gap-2 w-full border-2 border-ir-secondary text-ir-secondary hover:bg-ir-secondary hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
                        >
                            Visit Website
                            <FaArrowRight size={13} />
                        </Link>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-100 text-center text-gray-400 text-sm space-y-1">
                        <p>Lagos, Nigeria &middot; info@iniffrecombinant.com</p>
                        <p>&copy; {new Date().getFullYear()} INIFF RECOMBINANT GENOMICS (iR)</p>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default InfoPage;
