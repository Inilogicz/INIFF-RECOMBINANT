import React, { useState } from 'react';
import AnimatedPage from '../components/ui/AnimatedPage';
import PageHeader from '../components/ui/PageHeader';
import AnimatedSection from '../components/ui/AnimatedSection';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

// Define a type for the form data for better type safety
interface FormData {
    name: string;
    email: string;
    message: string;
}

// Define the possible states for our form submission
type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactPage: React.FC = () => {

    const contactInfo = [
        { icon: FaMapMarkerAlt, title: "Address", content: "312 Road, C-Close, House 1, Festac, Lagos, Nigeria" },
        { icon: FaPhone, title: "Phone", content: "+234 803 897 7010" },
        { icon: FaEnvelope, title: "Email", content: "info@iniffrecombinant.com" },
        { icon: FaClock, title: "Working Hours", content: "Mon–Sat | 9am – 6pm" },
    ];

    // State to hold the form input values
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    // State to track the submission status
    const [status, setStatus] = useState<FormStatus>('idle');

    // Handler to update state as the user types
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value,
        }));
    };

    // Handler for the form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default browser reload.
        setStatus('sending');

        try {
            const response = await fetch('https://iniff-recombinant-api.onrender.com/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                // If the server response is not 2xx, throw an error
                throw new Error('Network response was not ok');
            }

            // If we get here, the submission was successful
            setStatus('success');
            // Reset the form after a successful submission
            setFormData({ name: '', email: '', message: '' });

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setStatus('error');
        }
    };

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
                        
                        {/* Contact Form with Logic */}
                        <AnimatedSection delay={0.2}>
                            <div className="bg-ir-light p-8 rounded-lg shadow-lg">
                                <h2 className="text-3xl font-bold text-ir-secondary mb-6">Send a Message</h2>
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ir-primary focus:border-ir-primary" 
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ir-primary focus:border-ir-primary" 
                                            placeholder="you@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                        <textarea 
                                            id="message" 
                                            rows={5} 
                                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ir-primary focus:border-ir-primary" 
                                            placeholder="Your message..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button 
                                            type="submit" 
                                            className="w-full bg-ir-accent hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                            disabled={status === 'sending'}
                                        >
                                            {status === 'sending' ? 'Sending...' : 'Submit Request'}
                                        </button>
                                    </div>
                                    
                                    {/* Submission Status Feedback */}
                                    {status === 'success' && (
                                        <p className="text-center text-green-600 font-semibold mt-4">Message sent successfully! We'll be in touch soon.</p>
                                    )}
                                    {status === 'error' && (
                                        <p className="text-center text-red-600 font-semibold mt-4">Something went wrong. Please try again later.</p>
                                    )}
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