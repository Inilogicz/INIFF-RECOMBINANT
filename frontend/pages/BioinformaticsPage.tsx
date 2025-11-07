
import React from 'react';
import AnimatedPage from '../components/ui/AnimatedPage';
import PageHeader from '../components/ui/PageHeader';
import { BIOINFORMATICS_SERVICES } from '../constants';
import AnimatedSection from '../components/ui/AnimatedSection';
import { GiAtom } from 'react-icons/gi';

const BioinformaticsPage: React.FC = () => {
    return (
        <AnimatedPage>
            <PageHeader
                title="Bioinformatics Services"
                subtitle="Unlocking insights from complex biological data with advanced computational analysis."
            />
            <div className="py-20 md:py-24 bg-ir-light">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {BIOINFORMATICS_SERVICES.map((service, index) => (
                           <AnimatedSection key={service.title} delay={index * 0.1}>
                               <div className="bg-white p-8 rounded-lg shadow-lg flex items-start space-x-6 h-full transition-all duration-300 hover:border-l-4 hover:border-ir-primary">
                                   <div className="flex-shrink-0 text-ir-primary mt-1">
                                       <GiAtom size={32}/>
                                   </div>
                                   <div>
                                       <h3 className="text-xl font-bold text-ir-dark mb-2">{service.title}</h3>
                                       <p className="text-gray-600">{service.description}</p>
                                   </div>
                               </div>
                           </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default BioinformaticsPage;
