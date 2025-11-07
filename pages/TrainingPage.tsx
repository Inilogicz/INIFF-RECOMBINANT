
import React from 'react';
import AnimatedPage from '../components/ui/AnimatedPage';
import PageHeader from '../components/ui/PageHeader';
import { TRAINING_COURSES } from '../constants';
import AnimatedSection from '../components/ui/AnimatedSection';
import { FaGraduationCap } from 'react-icons/fa';

const TrainingPage: React.FC = () => {
    return (
        <AnimatedPage>
            <PageHeader
                title="Training & Capacity Development"
                subtitle="Enhancing skills and fostering scientific excellence through expert-led workshops."
            />
            <div className="py-20 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {TRAINING_COURSES.map((course, index) => (
                           <AnimatedSection key={course.title} delay={index * 0.1}>
                               <div className="bg-ir-light p-8 rounded-lg flex items-start space-x-6 h-full hover:shadow-lg transition-shadow duration-300">
                                   <div className="flex-shrink-0 text-ir-primary mt-1">
                                       <FaGraduationCap size={28}/>
                                   </div>
                                   <div>
                                       <h3 className="text-xl font-bold text-ir-secondary mb-2">{course.title}</h3>
                                       <p className="text-gray-600">{course.description}</p>
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

export default TrainingPage;
