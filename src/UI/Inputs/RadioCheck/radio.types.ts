import { HTMLProps } from "react";

declare const VALID_STYLE_VALUES: readonly ["default", "pricebtn", "catbtn", "naked", "icon", undefined];
declare type StyleValue = typeof VALID_STYLE_VALUES[number];

export interface RadioProps extends Omit<HTMLProps<HTMLInputElement>, 'className' | 'name' | 'id'>{
    children: string;
    className?: string;
    name: string;
    styleType?: StyleValue;
}

export interface CheckProps extends Omit<HTMLProps<HTMLInputElement>, 'className' | 'name' | 'id'>{
    children: string;
    className?: string;
    styleType?: StyleValue;
}