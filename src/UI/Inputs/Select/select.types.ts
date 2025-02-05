import { HTMLProps } from 'react';

export interface SelectProps extends Omit<HTMLProps<HTMLDivElement>, 'className'>{
    hint?: string;
    values: string[];
    disabled?: boolean;
    name?: string;
    index?: number;
    allowinput?: boolean;
    className?: string;
}