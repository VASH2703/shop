import { forwardRef, useState } from "react";
import { RadioGroupProps, InputItemProps } from "./radio.types";
import style from './radio.module.css';
import { Radio } from "../svg";
import hashId from "../hashId";

export const RadioItem = forwardRef<HTMLInputElement,InputItemProps> ((props, ref) => {
    const {children, disabled, checked, name, value, onClick, className} = props;

    return (
        <div className={`${style.radioBlock} ${className || ''}`} onClick={onClick}  {...props}>
            <input
                type="radio"
                value={value || children}
                name={name}
                ref={ref}
                disabled={disabled}
                checked={checked}
                className={style.radio}
            />
            <Radio checked={checked || false} color='var(--accent)'/>
            <label> {children} </label>
        </div>
    );
});



export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps> ((props, ref) => {
    const { values, disabled, index, name=hashId(), className} = props
    const [checked, setChecked] = useState<number>(index || 0);

    const handleClick = (index: number) => {
        setChecked(index);
    }

    return (
        <div className={`${style.block} ${className || ''}`} ref={ref} {...props}>
            {values.map((item, index) => (
                <RadioItem
                    disabled={disabled}
                    name={name}
                    checked={checked === index ? true : false}
                    onClick={!disabled ? () => handleClick(index) : () => {}}
                >
                    {item}
                </RadioItem>
            ))}
        </div>
    );
});