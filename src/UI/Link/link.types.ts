import { ReactNode, HTMLProps } from 'react';

export declare const VALID_SIZE_VALUES: readonly ["XS", "S", "M", "L", "XL", undefined];
declare type SizeValue = typeof VALID_SIZE_VALUES[number];

export interface LinkProps extends Omit<HTMLProps<HTMLAnchorElement>, 'className'> {
    children: ReactNode;
    fontSize?: SizeValue;
    fill?: boolean;
    icon?: boolean;
    className?: string;
}

export interface LinkBtnProps extends Omit<HTMLProps<HTMLButtonElement>, 'className'> {
    children: ReactNode;
    fontSize?: SizeValue;
    fill?: boolean;
    icon?: boolean;
    className?: string;
}