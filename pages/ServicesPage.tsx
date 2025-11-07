
import React from 'react';
import AnimatedPage from '../components/ui/AnimatedPage';
import PageHeader from '../components/ui/PageHeader';
import { SERVICES } from '../constants';
import AnimatedSection from '../components/ui/AnimatedSection';

const ServicesPage: React.FC = () => {
    return (
        <AnimatedPage>
            <PageHeader
                title="Our Services"
                subtitle="Comprehensive solutions to empower your research and diagnostic needs."
            />
            <div className="py-20 md:py-24 bg-ir-light">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map((service, index) => (
                           <AnimatedSection key={service.title} delay={index * 0.1}>
                               <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center h-full transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl">
                                   <div className="bg-ir-primary text-white p-5 rounded-full mb-6">
                                       <service.icon size={40}/>
                                   </div>
                                   <h3 className="text-2xl font-bold text-ir-secondary mb-3">{service.title}</h3>
                                   <p className="text-gray-600 leading-relaxed">{service.description}</p>
                               </div>
                           </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default ServicesPage;
