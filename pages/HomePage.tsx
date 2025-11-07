
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import AnimatedPage from '../components/ui/AnimatedPage';
import AnimatedSection from '../components/ui/AnimatedSection';
import { FaArrowRight } from 'react-icons/fa';

const HomePage: React.FC = () => {
    const heroVariants = {
        animate: { transition: { staggerChildren: 0.2 } },
    };

    const heroItemVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

    return (
        <AnimatedPage>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
                >
                    <source src="https://assets.mixkit.co/videos/23618/23618-720.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <motion.div
                    className="relative z-20 text-center container mx-auto px-6"
                    variants={heroVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h1
                        variants={heroItemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
                    >
                        Accelerating Africa’s Scientific & Healthcare Innovation
                    </motion.h1>
                    <motion.p
                        variants={heroItemVariants}
                        className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200"
                    >
                        Empowering laboratories, hospitals, and research institutes with world-class technology, support, and expertise.
                    </motion.p>
                    <motion.div
                        variants={heroItemVariants}
                        className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
                    >
                        <Link to="/contact" className="inline-block bg-ir-primary hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                            Get Started
                        </Link>
                        <Link to="/services" className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-ir-secondary text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                            Our Services
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Introduction Section */}
            <AnimatedSection className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-ir-secondary mb-4">Welcome to Iniff Recombinant (iR)</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            A Nigerian biotechnology and scientific solutions company dedicated to connecting healthcare and research institutions with modern laboratory technologies and expert support.
                        </p>
                        <p className="text-gray-500">
                           We bridge the gap between cutting-edge global innovations and local scientific needs, ensuring that researchers and clinicians in Africa have the tools they need to make groundbreaking discoveries and improve patient outcomes.
                        </p>
                        <Link to="/about" className="mt-8 inline-flex items-center text-ir-primary font-semibold hover:underline">
                            Learn More About Us <span className="ml-2"><FaArrowRight /></span>
                        </Link>
                    </div>
                    <div>
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0gkZM_bXdOSvSklC8FrA_auzur75f_EFBvw&s" alt="Scientific Team" className="rounded-lg shadow-2xl w-full h-auto object-cover"/>
                    </div>
                </div>
            </AnimatedSection>
            
            {/* Services Overview */}
            <AnimatedSection className="py-20 md:py-32 bg-ir-light">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-ir-secondary mb-4">Our Core Services</h2>
                    <p className="max-w-3xl mx-auto text-gray-600 mb-12">We provide a comprehensive suite of services to support every aspect of your scientific work.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.slice(0, 3).map((service, index) => (
                            <AnimatedSection key={service.title} delay={index * 0.1} className="w-full">
                                <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full transform hover:-translate-y-2 transition-transform duration-300">
                                    <div className="inline-block bg-ir-primary text-white p-4 rounded-full mb-6">
                                        <service.icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-ir-dark mb-3">{service.title}</h3>
                                    <p className="text-gray-500">{service.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                     <Link to="/services" className="mt-12 inline-block bg-ir-accent hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Explore All Services
                    </Link>
                </div>
            </AnimatedSection>

        </AnimatedPage>
    );
};

export default HomePage;
