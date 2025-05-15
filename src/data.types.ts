import { ReactElement } from "react";

export interface MapItemProps {
    icon?: ReactElement;
    name: string;
    href: string;
    imageSrc?: string;
    accent?: boolean;
}

export interface CategoryProps extends Omit<MapItemProps, 'icon'> {
    key: string;
}

export type MapProps = MapItemProps[];

export type CategoryMapProps = CategoryProps[];

export interface ProductItemProps extends Omit<MapItemProps, 'icon' | 'imageSrc'> {
    id: string;
    price: string;
    oldPrice?: string;
    rating?: number;
    favorite?: boolean;
    category: string;
    material: string[];
    gemstone: string[];
    collection?: string;
    images: string[];
    characteries?: Record<string,string>;
}

export type ProductListProps = ProductItemProps[];

