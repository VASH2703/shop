import {HTMLAttributes } from "react";

export interface CounterProps extends Omit<HTMLAttributes<HTMLInputElement>, 'className'>{
    min?:number;
    max?:number;
    step?:number;
    input?: boolean;
    className?: string;
}