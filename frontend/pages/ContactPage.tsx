
import React, { useState } from 'react';
import AnimatedPage from '../components/ui/AnimatedPage';
import PageHeader from '../components/ui/PageHeader';
import AnimatedSection from '../components/ui/AnimatedSection';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const INTEREST_OPTIONS = [
    'Laboratory Equipment',
    'Laboratory Consumables',
    'Reagents & Kits',
    'Genomics Solutions',
    'Bioinformatics',
    'Laboratory Setup',
    'Training',
    'Consultancy',
    'Other',
];

const TIMELINE_OPTIONS = [
    'Immediately',
    'Within 1 month',
    '1–3 months',
    'Just making an enquiry',
];

interface EnquiryFormState {
    fullName: string;
    company: string;
    email: string;
    phone: string;
    location: string;
    interests: string[];
    productService: string;
    requirement: string;
    timeline: string;
}

const INITIAL_FORM_STATE: EnquiryFormState = {
    fullName: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    interests: [],
    productService: '',
    requirement: '',
    timeline: '',
};

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const inputClasses = "mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ir-primary focus:border-ir-primary";

const ContactPage: React.FC = () => {

    const contactInfo = [
        { icon: FaMapMarkerAlt, title: "Address", content: "216, Adeyemo Akapo, Omole Phase 1, Lagos, Nigeria" },
        { icon: FaPhone, title: "Phone", content: "+234 803 897 7010" },
        { icon: FaEnvelope, title: "Email", content: "info@iniffrecombinant.com" },
        { icon: FaClock, title: "Working Hours", content: "Mon–Sat | 9am – 6pm" },
    ];

    const [form, setForm] = useState<EnquiryFormState>(INITIAL_FORM_STATE);
    const [status, setStatus] = useState<SubmitStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (field: keyof EnquiryFormState) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm((prev) => ({ ...prev, [field]: e.target.value }));
        };

    const toggleInterest = (option: string) => {
        setForm((prev) => ({
            ...prev,
            interests: prev.interests.includes(option)
                ? prev.interests.filter((i) => i !== option)
                : [...prev.interests, option],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (form.interests.length === 0) {
            setStatus('error');
            setErrorMessage('Please select at least one item you are interested in.');
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch(`${API_URL}/api/send-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data?.errors?.[0]?.msg || data?.error || 'Failed to send enquiry.');
            }

            setStatus('success');
            setForm(INITIAL_FORM_STATE);
        } catch (err) {
            setStatus('error');
            setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
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
                        
                        {/* Product & Service Enquiry Form */}
                        <AnimatedSection delay={0.2}>
                            <div className="bg-ir-light p-8 rounded-lg shadow-lg">
                                <h2 className="text-3xl font-bold text-ir-secondary mb-2">Product & Service Enquiry</h2>
                                <p className="text-gray-600 mb-6">Thank you for your interest in INIFF Recombinant Genomics. Please complete the form below, and our team will get back to you shortly.</p>

                                {status === 'success' ? (
                                    <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-6 text-center">
                                        <p className="font-semibold">Thank you — your enquiry has been sent!</p>
                                        <p className="mt-1 text-sm">Our team will get back to you shortly.</p>
                                        <button
                                            type="button"
                                            onClick={() => setStatus('idle')}
                                            className="mt-4 text-ir-primary font-medium underline"
                                        >
                                            Submit another enquiry
                                        </button>
                                    </div>
                                ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <h3 className="text-lg font-semibold text-ir-dark mb-4">Contact Information</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                                                <input type="text" id="fullName" required className={inputClasses} placeholder="John Doe" value={form.fullName} onChange={handleChange('fullName')} />
                                            </div>
                                            <div>
                                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company / Institution *</label>
                                                <input type="text" id="company" required className={inputClasses} placeholder="Your organization" value={form.company} onChange={handleChange('company')} />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                                                <input type="email" id="email" required className={inputClasses} placeholder="you@example.com" value={form.email} onChange={handleChange('email')} />
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone / WhatsApp Number</label>
                                                <input type="tel" id="phone" className={inputClasses} placeholder="+234 800 000 0000" value={form.phone} onChange={handleChange('phone')} />
                                            </div>
                                            <div>
                                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location *</label>
                                                <input type="text" id="location" required className={inputClasses} placeholder="City / State / Country" value={form.location} onChange={handleChange('location')} />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-ir-dark mb-4">Your Enquiry</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <span className="block text-sm font-medium text-gray-700 mb-2">What are you interested in? *</span>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {INTEREST_OPTIONS.map((option) => (
                                                        <label key={option} className="flex items-center space-x-2 text-sm text-gray-700">
                                                            <input
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-ir-primary focus:ring-ir-primary"
                                                                checked={form.interests.includes(option)}
                                                                onChange={() => toggleInterest(option)}
                                                            />
                                                            <span>{option}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="productService" className="block text-sm font-medium text-gray-700">Product / Service Required *</label>
                                                <input type="text" id="productService" required className={inputClasses} placeholder="e.g. PCR Thermocycler" value={form.productService} onChange={handleChange('productService')} />
                                            </div>
                                            <div>
                                                <label htmlFor="requirement" className="block text-sm font-medium text-gray-700">Tell us about your requirement</label>
                                                <textarea id="requirement" rows={5} className={inputClasses} placeholder="Please describe what you need, including quantity, specifications, application, or any other relevant details." value={form.requirement} onChange={handleChange('requirement')}></textarea>
                                            </div>
                                            <div>
                                                <span className="block text-sm font-medium text-gray-700 mb-2">How soon do you need it?</span>
                                                <div className="space-y-2">
                                                    {TIMELINE_OPTIONS.map((option) => (
                                                        <label key={option} className="flex items-center space-x-2 text-sm text-gray-700">
                                                            <input
                                                                type="radio"
                                                                name="timeline"
                                                                className="h-4 w-4 border-gray-300 text-ir-primary focus:ring-ir-primary"
                                                                checked={form.timeline === option}
                                                                onChange={() => setForm((prev) => ({ ...prev, timeline: option }))}
                                                            />
                                                            <span>{option}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {status === 'error' && (
                                        <p className="text-sm text-red-600">{errorMessage}</p>
                                    )}

                                    <div>
                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="w-full bg-ir-accent hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
                                        >
                                            {status === 'submitting' ? 'Submitting...' : 'Submit Your Enquiry'}
                                        </button>
                                        <p className="mt-3 text-xs text-gray-500 text-center">
                                            Your information will be used to respond to your enquiry and provide relevant product or service information.
                                        </p>
                                    </div>
                                </form>
                                )}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default ContactPage;
