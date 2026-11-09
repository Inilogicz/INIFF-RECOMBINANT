
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/ui/AnimatedPage';
import AnimatedSection from '../components/ui/AnimatedSection';
import Logo from '../components/ui/Logo';
import ShareButton from '../components/ui/ShareButton';
import {
    FaWhatsapp,
    FaArrowRight,
    FaFacebook,
    FaInstagram,
    FaTiktok,
    FaEnvelope,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import { OFFERINGS } from '../constants';

const WHATSAPP_NUMBER = '2348038977010';
const WHATSAPP_MESSAGE = "Hi, I'd like to know more about INIFF Recombinant Genomics' products and services.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

interface LinkItem {
    label: string;
    icon: IconType;
    className: string;
}

interface InternalLinkItem extends LinkItem {
    to: string;
    href?: undefined;
}

interface ExternalLinkItem extends LinkItem {
    href: string;
    to?: undefined;
}

const PRIMARY_LINKS: (InternalLinkItem | ExternalLinkItem)[] = [
    {
        label: 'Make an Enquiry',
        icon: FaEnvelope,
        to: '/contact',
        className: 'bg-ir-primary hover:bg-opacity-90 text-white',
    },
    {
        label: 'Chat on WhatsApp',
        icon: FaWhatsapp,
        href: WHATSAPP_HREF,
        className: 'bg-[#25D366] hover:bg-opacity-90 text-white',
    },
];

const SOCIAL_LINKS: ExternalLinkItem[] = [
    {
        label: 'Follow on Instagram',
        icon: FaInstagram,
        href: 'https://www.instagram.com/iniffrecombinant?stkn=emNucWQ3YW1mZ3U5',
        className: 'bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:opacity-90 text-white',
    },
    {
        label: 'Follow on Facebook',
        icon: FaFacebook,
        href: 'https://www.facebook.com/share/14oSKm4Pe5w/',
        className: 'bg-[#1877F2] hover:bg-opacity-90 text-white',
    },
    {
        label: 'Follow on TikTok',
        icon: FaTiktok,
        href: 'https://vm.tiktok.com/ZS9SBrf86cf2S-QpfE5/',
        className: 'bg-ir-dark hover:bg-opacity-90 text-white',
    },
];

const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const linkStackVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const linkItemVariants = {
    hidden: { opacity: 0, y: 12 },
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

                    <motion.div
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex flex-wrap justify-center gap-2 mt-6"
                    >
                        {OFFERINGS.map((item) => (
                            <motion.span
                                key={item.label}
                                variants={itemVariants}
                                className="inline-flex items-center gap-1.5 rounded-full bg-ir-primary/10 text-ir-primary text-xs font-medium px-3 py-1.5"
                            >
                                <item.icon size={12} />
                                {item.label}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={linkStackVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-10 space-y-3"
                    >
                        {PRIMARY_LINKS.map((item) => {
                            const content = (
                                <>
                                    <item.icon size={18} />
                                    {item.label}
                                </>
                            );
                            const classes = `flex items-center justify-center gap-2 w-full font-semibold py-3.5 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-md ${item.className}`;
                            return (
                                <motion.div key={item.label} variants={linkItemVariants}>
                                    {item.to ? (
                                        <Link to={item.to} className={classes}>{content}</Link>
                                    ) : (
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" className={classes}>{content}</a>
                                    )}
                                </motion.div>
                            );
                        })}

                        {SOCIAL_LINKS.map((item) => (
                            <motion.a
                                key={item.label}
                                variants={linkItemVariants}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center gap-2 w-full font-semibold py-3.5 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-md ${item.className}`}
                            >
                                <item.icon size={18} />
                                {item.label}
                            </motion.a>
                        ))}

                        <motion.div variants={linkItemVariants}>
                            <Link
                                to="/"
                                className="flex items-center justify-center gap-2 w-full border-2 border-ir-secondary text-ir-secondary hover:bg-ir-secondary hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
                            >
                                Visit Website
                                <FaArrowRight size={13} />
                            </Link>
                        </motion.div>

                        <motion.div variants={linkItemVariants}>
                            <ShareButton
                                title="INIFF Recombinant Genomics"
                                text="Check out INIFF Recombinant Genomics — Life Science Solutions."
                                label="Share This Page"
                                className="!border-ir-secondary/40 !text-gray-500 hover:!text-white !py-3"
                            />
                        </motion.div>
                    </motion.div>

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
