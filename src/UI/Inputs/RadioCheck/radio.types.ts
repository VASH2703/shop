import { HTMLProps } from "react";

declare const VALID_STYLE_VALUES: readonly ["default", "pricebtn", "catbtn", "naked", undefined];
declare type StyleValue = typeof VALID_STYLE_VALUES[number];

export interface InputItemProps extends Omit<HTMLProps<HTMLInputElement>, 'className' | 'name' | 'value' | 'id'>{
    children: string;
    className?: string;
    name: string;
    styleType?: StyleValue;
}