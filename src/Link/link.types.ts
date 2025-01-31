import { ReactNode, HTMLAttributes } from 'react';

declare const VALID_SIZE_VALUES: readonly ["XS", "S", "M", "L", "XL", undefined];
declare type SizeValue = typeof VALID_SIZE_VALUES[number];

export interface LinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, 'className'> {
    children: ReactNode;
    size?: SizeValue;
    disabled?: boolean;
    fill?: boolean;
    icon?: boolean;
    className?: string;
}