import {HTMLProps } from "react";

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'className'>{
    error?: boolean;
    className?: string;
}

export interface TextAreaProps extends Omit<HTMLProps<HTMLTextAreaElement>, 'className'>{
    error?: boolean;
    className?: string;
}