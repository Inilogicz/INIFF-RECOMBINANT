
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TrainingPage from './pages/TrainingPage';
import BioinformaticsPage from './pages/BioinformaticsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ui/ScrollToTop';

const App: React.FC = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <ScrollToTop />
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/training" element={<TrainingPage />} />
                        <Route path="/bioinformatics" element={<BioinformaticsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
};

export default App;
