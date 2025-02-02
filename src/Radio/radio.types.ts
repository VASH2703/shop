import { HTMLAttributes } from "react";

export interface RadioGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>{
    values: string[];
    disabled?: boolean;
    name?: string;
    index?: number;
    className?: string;
}

export interface InputItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>{
    children: string;
    disabled?: boolean;
    checked?: boolean;
    name?: string;
    value?: string;
    className?: string;
}