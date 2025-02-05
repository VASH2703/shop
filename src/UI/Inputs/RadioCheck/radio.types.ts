import { HTMLProps } from "react";

export interface RadioGroupProps extends Omit<HTMLProps<HTMLDivElement>, 'className'>{
    values: string[];
    disabled?: boolean;
    name?: string;
    index?: number;
    className?: string;
}

export interface InputItemProps extends Omit<HTMLProps<HTMLDivElement>, 'className'>{
    children: string;
    disabled?: boolean;
    checked?: boolean;
    name?: string;
    value?: string;
    className?: string;
}

export interface CheckListProps extends Omit<HTMLProps<HTMLDivElement>, 'className'>{
    values: string[];
    disabled?: boolean;
    name?: string;
    selectedIndex?: boolean[];
    className?: string;
}