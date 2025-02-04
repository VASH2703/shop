import { HTMLAttributes } from 'react';

export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>{
    hint?: string;
    values: string[];
    disabled?: boolean;
    name?: string;
    index?: number;
    allowinput?: boolean;
    className?: string;
}