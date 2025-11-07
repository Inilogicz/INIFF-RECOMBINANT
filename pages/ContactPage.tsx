
import React from 'react';
import AnimatedPage from '../components/ui/AnimatedPage';
import PageHeader from '../components/ui/PageHeader';
import AnimatedSection from '../components/ui/AnimatedSection';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactPage: React.FC = () => {

    const contactInfo = [
        { icon: FaMapMarkerAlt, title: "Address", content: "312 Road, C-Close, House 1, Festac, Lagos, Nigeria" },
        { icon: FaPhone, title: "Phone", content: "+234 803 897 7010" },
        { icon: FaEnvelope, title: "Email", content: "info@iniffrecombinant.com" },
        { icon: FaClock, title: "Working Hours", content: "Mon–Sat | 9am – 6pm" },
    ];

    return (
        <AnimatedPage>
            <PageHeader
                title="Contact Us"
                subtitle="We're here to help and answer any question you might have. We look forward to hearing from you."
            />
            <div className="py-20 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Contact Info */}
                        <AnimatedSection>
                             <h2 className="text-3xl font-bold text-ir-secondary mb-6">Get In Touch</h2>
                             <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 bg-ir-primary text-white rounded-full p-3 mt-1">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-ir-dark">{item.title}</h3>
                                            <p className="text-gray-600">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </AnimatedSection>
                        
                        {/* Contact Form Placeholder */}
                        <AnimatedSection delay={0.2}>
                            <div className="bg-ir-light p-8 rounded-lg shadow-lg">
                                <h2 className="text-3xl font-bold text-ir-secondary mb-6">Send a Message</h2>
                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <input type="text" id="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ir-primary focus:border-ir-primary" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                        <input type="email" id="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ir-primary focus:border-ir-primary" placeholder="you@example.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                        <textarea id="message" rows={5} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ir-primary focus:border-ir-primary" placeholder="Your message..."></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full bg-ir-accent hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105">
                                            Submit Request
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default ContactPage;
