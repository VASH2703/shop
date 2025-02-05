import {HTMLProps } from "react";

declare const VALID_ALING_VALUES: readonly ["start", "end", "center", "justify", undefined];
declare type AlingValue = typeof VALID_ALING_VALUES[number];

export interface HeadlineProps extends Omit<HTMLProps<HTMLDivElement>, 'className'> {
    children: string;
    textAling?: AlingValue;
    className?: string;
}