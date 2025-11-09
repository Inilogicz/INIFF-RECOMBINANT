import { NavLink, Service, TrainingCourse, BioinformaticService, Value, Blog } from './types';
import { FaFlask, FaLaptopCode, FaChalkboardTeacher, FaTools, FaHandsHelping } from 'react-icons/fa';
import { GiDna1 } from 'react-icons/gi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { RiShieldCheckLine } from "react-icons/ri";
import { FaShieldAlt } from "react-icons/fa"; 



export const NAV_LINKS: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Training', path: '/training' },
    { name: 'Bioinformatics', path: '/bioinformatics' },
    { name: 'Blog', path: '/blog' },
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

export const CORE_VALUES: Value[] = [
    { name: 'Innovation', icon: HiOutlineLightBulb, description: "We continuously seek and implement novel solutions to advance scientific discovery." },
    { name: 'Integrity', icon: FaShieldAlt, description: "We operate with transparency and uphold the highest ethical standards in all our endeavors." },
    { name: 'Scientific Excellence', icon: GiDna1, description: "We are committed to the highest standards of quality and precision in science and technology." },
    { name: 'Customer Support', icon: FaHandsHelping, description: "We provide unwavering support to ensure our clients' success and satisfaction." },
    { name: 'Sustainable Growth', icon: FaChalkboardTeacher, description: "We invest in local capacity building to foster long-term scientific independence in Africa." }
];

export const BLOG_POSTS: Blog[] = [
    {
        slug: 'crispr-gene-editing-revolution',
        title: 'The CRISPR Revolution: Gene Editing and its Future in African Healthcare',
        category: 'Biotechnology',
        isPublished: true,
        coverImage: { url: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1200&auto=format&fit=crop' },
        excerpt: 'CRISPR technology is poised to revolutionize medicine. We explore its potential applications and ethical considerations for the African continent.',
        blogDetails: {
            html: `<p>The advent of CRISPR-Cas9 gene-editing technology has been one of the most significant scientific breakthroughs of the 21st century. Its precision and relative ease of use have opened up unprecedented possibilities for treating genetic diseases, developing hardier crops, and understanding the very blueprint of life. For Africa, a continent grappling with a unique set of health and agricultural challenges, CRISPR holds immense promise.</p><p class="mt-4">Imagine a future where sickle cell anemia, a disease disproportionately affecting people of African descent, can be cured with a one-time treatment. Researchers are actively pursuing this, using CRISPR to correct the faulty gene responsible for the disease. Similarly, gene editing could be used to develop drought-resistant and pest-resistant crops, bolstering food security in regions vulnerable to climate change.</p><p class="mt-4">However, the path to widespread adoption is not without its hurdles. The high cost of development, the need for robust regulatory frameworks, and complex ethical considerations surrounding germline editing are all significant challenges that must be addressed. At INIFF RECOMBINANT, we are committed to fostering dialogue and building capacity to ensure that Africa can harness the power of this revolutionary technology responsibly and equitably.</p>`
        },
        author: 'Dr. Amina Okoro',
        date: 'August 15, 2024',
    },
    {
        slug: 'next-generation-sequencing-diagnostics',
        title: 'Next-Generation Sequencing (NGS) in Clinical Diagnostics',
        category: 'Diagnostics',
        isPublished: true,
        coverImage: { url: 'https://images.unsplash.com/photo-1618997384318-09a254c7286a?q=80&w=1200&auto=format&fit=crop' },
        excerpt: 'How Next-Generation Sequencing is transforming the speed and accuracy of disease diagnosis, from infectious diseases to cancer.',
        blogDetails: {
            html: `<p>Next-Generation Sequencing (NGS) has rapidly moved from the research lab to the forefront of clinical diagnostics. Unlike traditional methods that analyze one gene at a time, NGS allows for the simultaneous sequencing of millions of DNA fragments. This massive parallel processing capability provides a comprehensive view of an individual's genetic makeup, enabling faster, more accurate diagnoses.</p><p class="mt-4">In oncology, NGS is used to profile tumors, identify specific mutations, and guide personalized treatment strategies. For infectious diseases, it can rapidly identify pathogens, track outbreaks, and monitor for antimicrobial resistance. The ability to get a detailed genetic snapshot is also revolutionizing the diagnosis of rare genetic disorders, often ending a long "diagnostic odyssey" for patients and their families.</p><p class="mt-4">Implementing NGS in clinical settings requires significant investment in equipment, bioinformatics expertise, and data management infrastructure. Our training and consultancy services are designed to help laboratories across Nigeria and Africa build the necessary capacity to integrate NGS into their diagnostic workflows, ultimately improving patient outcomes.</p>`
        },
        author: 'Femi Adebayo',
        date: 'July 28, 2024',
    },
    {
        slug: 'bioinformatics-data-deluge',
        title: 'Navigating the Data Deluge: The Crucial Role of Bioinformatics',
        category: 'Bioinformatics',
        isPublished: true,
        coverImage: { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop' },
        excerpt: 'Modern biology generates vast amounts of data. Bioinformatics is the key to turning this raw data into meaningful biological insights.',
        blogDetails: {
            html: `<p>The "omics" era—genomics, transcriptomics, proteomics—has created an unprecedented explosion of biological data. A single sequencing experiment can generate terabytes of information. Without the tools to process, analyze, and interpret this data, it remains just noise. This is where bioinformatics plays a pivotal role.</p><p class="mt-4">Bioinformatics combines biology, computer science, and statistics to make sense of complex biological data. It involves developing algorithms, software, and databases to analyze DNA sequences, protein structures, and gene expression patterns. From identifying disease-causing mutations to discovering new drug targets, bioinformatics is the engine driving modern biomedical research.</p><p class="mt-4">At INIFF RECOMBINANT, our bioinformatics services provide researchers with the computational power and expertise needed to tackle their most challenging data analysis problems. We offer everything from genome annotation to complex multi-omics integration, empowering our clients to extract actionable knowledge from their data and accelerate the pace of their discoveries.</p>`
        },
        author: 'Chidinma Eze',
        date: 'June 05, 2024',
    },
];
