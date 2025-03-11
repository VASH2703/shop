import { ProductItemProps, FullProduct } from "../../data.types";

export interface ProductProps extends Omit<ProductItemProps, 'accent'> {
    className?: string;
}

export interface ProductCartProps extends Omit<FullProduct, 'characteries' | 'collection' | 'rating' | 'images'> {
    imageSrc?: string;
    className?: string;
}