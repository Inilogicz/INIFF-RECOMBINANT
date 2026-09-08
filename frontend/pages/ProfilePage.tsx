
import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/ui/AnimatedPage';
import AnimatedSection from '../components/ui/AnimatedSection';
import ShareButton from '../components/ui/ShareButton';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { OFFERINGS, TEAM_PROFILES } from '../constants';

const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const ProfilePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const profile = TEAM_PROFILES.find((p) => p.slug === slug);

    if (!profile) {
        return <Navigate to="/info" replace />;
    }

    const initials = profile.name.charAt(0).toUpperCase();

    return (
        <AnimatedPage>
            <div className="min-h-screen bg-white">

                {/* Hero */}
                <div className="relative bg-ir-secondary overflow-hidden">
                    <div className="relative max-w-md mx-auto pt-28 pb-14 px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {profile.photo ? (
                                <img
                                    src={profile.photo}
                                    alt={profile.name}
                                    className="h-24 w-24 mx-auto mb-4 rounded-full object-cover border-4 border-white/20"
                                />
                            ) : (
                                <div className="h-24 w-24 mx-auto mb-4 rounded-full border-4 border-white/20 bg-ir-primary flex items-center justify-center text-white text-3xl font-bold">
                                    {initials}
                                </div>
                            )}
                            <h1 className="text-white font-bold text-2xl tracking-tight">{profile.name}</h1>
                            <p className="text-ir-primary font-semibold text-sm tracking-wide mt-1">
                                {profile.position}
                            </p>
                            <p className="text-gray-300 font-semibold text-xs tracking-wide mt-2">
                                INIFF Recombinant Genomics
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-md mx-auto px-6 py-10">
                    <AnimatedSection>
                        <p className="text-gray-600 leading-relaxed text-center">
                            {profile.summary}
                        </p>
                    </AnimatedSection>

                    <h2 className="text-ir-secondary font-bold text-lg mt-10 mb-4 text-center">What We Offer</h2>
                    <motion.div
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex flex-wrap justify-center gap-2"
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

                    <div className="mt-10 space-y-3">
                        {profile.phone && (
                            <a
                                href={`tel:${profile.phone}`}
                                className="flex items-center justify-center gap-2 w-full bg-ir-primary hover:bg-opacity-90 text-white font-semibold py-3.5 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                            >
                                <FaPhoneAlt size={16} />
                                Call {profile.name.split(' ')[0]}
                            </a>
                        )}
                        {profile.email && (
                            <a
                                href={`mailto:${profile.email}`}
                                className="flex items-center justify-center gap-2 w-full bg-ir-secondary hover:bg-opacity-90 text-white font-semibold py-3.5 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                            >
                                <FaEnvelope size={18} />
                                Email {profile.name.split(' ')[0]}
                            </a>
                        )}
                        <Link
                            to="/contact"
                            className="flex items-center justify-center gap-2 w-full border-2 border-ir-secondary text-ir-secondary hover:bg-ir-secondary hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
                        >
                            Make an Enquiry
                        </Link>
                        <ShareButton
                            title={`${profile.name} — INIFF Recombinant Genomics`}
                            text={`Check out ${profile.name}'s profile at INIFF Recombinant Genomics.`}
                            label="Share Profile"
                        />
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

export default ProfilePage;
