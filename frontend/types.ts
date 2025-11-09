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

export interface Blog {
    slug: string;
    title: string;
    category?: string | string[];
    coverImage?: {
        url: string;
    };
    excerpt?: string | null;
    blogDetails?: {
        html: string;
    };
    author?: string | null;
    date?: string | null;
    isPublished?: boolean;
}
