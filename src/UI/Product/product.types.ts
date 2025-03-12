import { ProductItemProps, FullProduct } from "../../data.types";
import { ChangeEvent } from 'react';

export interface ProductProps extends Omit<ProductItemProps, 'accent'> {
    className?: string;
}

export interface ProductCartProps extends Omit<FullProduct, 'characteries' | 'collection' | 'rating' | 'images'> {
    imageSrc: string;
    className?: string;
    select: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    index: number;
}