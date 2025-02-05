import {HTMLProps } from "react";

export interface CounterProps extends Omit<HTMLProps<HTMLInputElement>, 'className'>{
    min?:number;
    max?:number;
    step?:number;
    input?: boolean;
    className?: string;
}