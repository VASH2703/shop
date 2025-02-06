import { ReactNode } from "react";

export interface OfferProps {
    price: string;
    name?: string;
    href: string;
    imageSrc: string;
    accent?: boolean;
    className?: string;
}

export interface GalleryProps {
    children: ReactNode;
    column?: number;
    gap?: string;
    className?: string;
}

export interface AccentRowProps {
    children: ReactNode;
    oldColumn?: number;
    newColumn?: number;
    gap?: string;
    className?: string;
}

export interface OfferCatProps {
    name: string;
    href: string;
    imageSrc: string;
    collection?: boolean;
    className?: string;
}