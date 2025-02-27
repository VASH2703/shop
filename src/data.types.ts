import { ReactElement } from "react";

export interface MapItemProps {
    icon?: ReactElement;
    name: string;
    href: string;
    imageSrc?: string;
    accent?: boolean;
}

export type MapProps = MapItemProps[];

export interface ProductItemProps extends MapItemProps{
    price: string;
    oldPrice?: string;
    rating?: number;
    favorite?: boolean;
}

export type ProductListProps = ProductItemProps[];