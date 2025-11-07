
import React from 'react';
import AnimatedPage from '../components/ui/AnimatedPage';
import PageHeader from '../components/ui/PageHeader';
import AnimatedSection from '../components/ui/AnimatedSection';
import { CORE_VALUES } from '../constants';

const AboutPage: React.FC = () => {
    return (
        <AnimatedPage>
            <PageHeader
                title="About INIFF RECOMBINANT"
                subtitle="Pioneering scientific progress and capacity building across Africa."
            />

            <AnimatedSection className="py-20 md:py-24 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqp5GHRj4JJeC4BUNxrz3omQlBSYMptFalfg&s" alt="Laboratory Research" className="rounded-lg shadow-xl w-full h-auto object-cover" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-ir-secondary mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            To empower healthcare and research institutions through technology, knowledge, and reliable laboratory support. We strive to be a catalyst for innovation by providing accessible, world-class tools and expertise that enable our partners to achieve their goals and push the boundaries of science.
                        </p>
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="py-20 md:py-24 bg-ir-light">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                     <div className="md:order-2">
                        <img src="data:image/jpeg;base64,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" alt="Biotechnology" className="rounded-lg shadow-xl w-full h-auto object-cover" />

                    </div>
                    <div className="md:order-1">
                        <h2 className="text-3xl font-bold text-ir-secondary mb-4">Our Vision</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            To be Africa’s leading platform for modern scientific innovation, capacity building, and biomedical technology integration. We envision a future where African scientists lead global research, backed by robust local infrastructure and a vibrant collaborative ecosystem.
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-20 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-ir-secondary">Our Core Values</h2>
                        <p className="text-lg text-gray-600 mt-4">The principles that guide our work and define our commitment to the scientific community.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CORE_VALUES.map((value, index) => (
                             <AnimatedSection key={value.name} delay={index * 0.1}>
                                <div className="text-center p-8 border border-gray-200 rounded-lg h-full hover:shadow-xl hover:border-ir-primary transition-all duration-300">
                                    <div className="inline-block text-ir-primary mb-4">
                                        <value.icon size={40} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-ir-dark mb-2">{value.name}</h3>
                                    <p className="text-gray-500">{value.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </AnimatedPage>
    );
};

export default AboutPage;
