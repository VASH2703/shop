import { ProductItemProps} from "../../data.types";
import { ChangeEvent } from 'react';

export interface ProductProps extends Omit<ProductItemProps, 'accent'> {
    className?: string;
}

export interface ProductCartProps extends Omit<ProductItemProps, 'characteries' | 'collection' | 'rating' | 'images' | 'id' | 'category'> {
    imageSrc: string;
    className?: string;
    select: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    index: number;
}