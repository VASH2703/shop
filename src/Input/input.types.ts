import {HTMLAttributes } from "react";

export interface InputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'className'>{
    error?: boolean;
    className?: string;
}