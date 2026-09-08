
import { NavLink, Service, TrainingCourse, BioinformaticService, Value, TeamProfile, OfferingItem } from './types';
import { FaFlask, FaLaptopCode, FaChalkboardTeacher, FaTools, FaHandsHelping, FaMicroscope, FaBoxOpen } from 'react-icons/fa';
import { GiDna1 } from 'react-icons/gi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { RiShieldCheckLine } from 'react-icons/ri';

export const OFFERINGS: OfferingItem[] = [
    { label: 'Laboratory Equipment', icon: FaMicroscope },
    { label: 'Laboratory Consumables', icon: FaBoxOpen },
    { label: 'Reagents & Kits', icon: FaFlask },
    { label: 'Genomics Solutions', icon: GiDna1 },
    { label: 'Bioinformatics', icon: FaLaptopCode },
    { label: 'Laboratory Setup', icon: FaTools },
    { label: 'Training', icon: FaChalkboardTeacher },
    { label: 'Consultancy', icon: FaHandsHelping },
];

export const NAV_LINKS: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Training', path: '/training' },
    { name: 'Bioinformatics', path: '/bioinformatics' },
    { name: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
    {
        title: "Lab Equipment & Consumables",
        description: "Procurement of state-of-the-art laboratory equipment and high-quality consumables to ensure your research and diagnostics are precise and reliable.",
        icon: FaFlask
    },
    {
        title: "Laboratory Setup & Maintenance",
        description: "Expert assistance in designing, setting up, and maintaining modern laboratories that meet international standards for safety and efficiency.",
        icon: FaTools
    },
    {
        title: "Scientific Training & Capacity Development",
        description: "Comprehensive training programs designed to enhance the skills and knowledge of your scientific and technical staff.",
        icon: FaChalkboardTeacher
    },
    {
        title: "Bioinformatics Services",
        description: "Advanced bioinformatics solutions to help you analyze, interpret, and visualize complex biological data with accuracy and speed.",
        icon: FaLaptopCode
    },
    {
        title: "General Laboratory Consultancy",
        description: "Providing strategic guidance and consultancy on all aspects of laboratory management, quality control, and process optimization.",
        icon: FaHandsHelping
    }
];

export const TRAINING_COURSES: TrainingCourse[] = [
    { title: "Molecular Biology Essentials", description: "A foundational course covering the core principles and techniques of molecular biology, ideal for new researchers." },
    { title: "PCR & qPCR Workshop", description: "Hands-on training on Polymerase Chain Reaction and quantitative PCR, from experiment design to data analysis." },
    { title: "NGS Data Analysis", description: "Learn to navigate the complexities of Next-Generation Sequencing data with our in-depth analysis workshop." },
    { title: "Laboratory Biosafety & Quality Systems", description: "Essential training on implementing robust biosafety protocols and quality management systems in the lab." },
    { title: "Clinical Diagnostics Workflow Training", description: "A specialized course focusing on the complete workflow of modern clinical diagnostics from sample to result." },
];

export const BIOINFORMATICS_SERVICES: BioinformaticService[] = [
    { title: "Genome & Transcriptome Analysis", description: "Comprehensive analysis of genomic and transcriptomic data to uncover biological insights." },
    { title: "Variant Calling & Omics Analysis", description: "Cutting-edge techniques for identifying genetic variants and integrating multi-omics datasets." },
    { title: "Phylogenetics & Annotation", description: "Construct evolutionary trees and functionally annotate genomes to understand biological diversity and function." },
    { title: "Data Visualization & Research Support", description: "Transforming complex data into intuitive visualizations and providing ongoing support for your research projects." },
];

// TODO: replace position/summary/photo with the real details for each team member.
export const TEAM_PROFILES: TeamProfile[] = [
    {
        slug: 'james',
        name: 'James',
        position: 'Team Member',
        summary: 'Bio coming soon.',
    },
    {
        slug: 'chidozie',
        name: 'Chidozie E. Ozurumba',
        position: 'Account Officer',
        summary: 'Supporting overall business sustainability through financial accounting and analytics for data-driven decision-making, strategic direction, and regulatory compliance.',
        email: 'chidozie.emmanuel@iniffrecombinant.com',
        phone: '+2347031548526',
        photo: '/team/chidozie.png',
    },
    {
        slug: 'nkechi',
        name: 'Mokolo Nkechi',
        position: 'Lead, Sales & Marketing',
        summary: 'I connect laboratories, researchers, and healthcare professionals with reliable life science products, laboratory solutions, and technical services.',
        email: 'sales.team@iniffrecombinant.com',
        phone: '+2347060777929',
    },
    {
        slug: 'happinesse',
        name: 'Happinesse',
        position: 'Team Member',
        summary: 'Bio coming soon.',
    },
];

export const CORE_VALUES: Value[] = [
    { name: 'Innovation', icon: HiOutlineLightBulb, description: "We continuously seek and implement novel solutions to advance scientific discovery." },
    { name: 'Integrity', icon: RiShieldCheckLine, description: "We operate with transparency and uphold the highest ethical standards in all our endeavors." },
    { name: 'Scientific Excellence', icon: GiDna1, description: "We are committed to the highest standards of quality and precision in science and technology." },
    { name: 'Customer Support', icon: FaHandsHelping, description: "We provide unwavering support to ensure our clients' success and satisfaction." },
    { name: 'Sustainable Growth', icon: FaChalkboardTeacher, description: "We invest in local capacity building to foster long-term scientific independence in Africa." }
];
