import { HTMLProps, ReactNode } from 'react';

declare const VALID_STYLE_VALUES: readonly ["arrow", "close", undefined];
declare type StyleValue = typeof VALID_STYLE_VALUES[number];

export interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'className'> {
    children: ReactNode;
    styleType?: StyleValue;
    full?: boolean;
    className?: string;
}

export interface BtnAnchoreProps extends Omit<HTMLProps<HTMLAnchorElement>, 'className'> {
    children: ReactNode;
    kind?: StyleValue;
    full?: boolean;
    className?: string;
}