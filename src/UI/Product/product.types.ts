export interface ProductProps {
    name: string;
    price: string;
    oldPrice?: string;
    href: string;
    imageSrc?: string;
    rating?: number;
    favorite?: boolean;
    className?: string;
}