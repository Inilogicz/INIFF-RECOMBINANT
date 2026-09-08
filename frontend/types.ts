
import { IconType } from 'react-icons';

export interface NavLink {
    name: string;
    path: string;
}

export interface Service {
    title: string;
    description: string;
    icon: IconType;
}

export interface TrainingCourse {
    title: string;
    description: string;
}

export interface BioinformaticService {
    title: string;
    description: string;
}

export interface Value {
    name: string;
    description: string;
    icon: IconType;
}

export interface TeamProfile {
    slug: string;
    name: string;
    position: string;
    summary: string;
    photo?: string;
}

export interface OfferingItem {
    label: string;
    icon: IconType;
}
