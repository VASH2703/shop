import {HTMLProps } from "react";

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'className'>{
    error?: boolean;
    className?: string;
}