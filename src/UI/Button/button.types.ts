import { HTMLProps, ReactNode } from 'react';

declare const VALID_STYLE_VALUES: readonly ["price", "cat", "arrow", "close", undefined];
declare type StyleValue = typeof VALID_STYLE_VALUES[number];

export interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'className'> {
    children: ReactNode;
    kind?: StyleValue;
    disabled?: boolean;
    full?: boolean;
    className?: string;
}