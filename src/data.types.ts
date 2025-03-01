import { ReactElement } from "react";

export interface MapItemProps {
    icon?: ReactElement;
    name: string;
    href: string;
    imageSrc?: string;
    accent?: boolean;
}

export type MapProps = MapItemProps[];

export interface ProductItemProps extends Omit<MapItemProps, 'icon'> {
    price: string;
    oldPrice?: string;
    rating?: number;
    favorite?: boolean;
}

export type ProductListProps = ProductItemProps[];

export interface Character {
    [key: string]: string;
}

export interface FullProduct extends Omit<ProductItemProps, 'accent' | 'imageSrc'> {
    images: string[];
    characteries: Character[];
    collection?: string;
    material: string[];
    gemstone: string[];
}