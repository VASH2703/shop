import { forwardRef } from "react";
import { InputItemProps } from "./radio.types";

import { Radio, Check } from "../../../svg";

import def from './radio.module.css';
import btn from './pricebtn.module.css';
import naked from './naked.module.css';
import classNames from "classnames";

const styleMap = {
    default: def,
    pricebtn: btn,
    catbtn: btn,
    naked: naked
};

export const RadioItem = forwardRef<HTMLLabelElement,InputItemProps> ((props, ref) => {
    const {children, className = '', name, styleType = "default", ...also} = props;

    const style = styleMap[styleType];

    const labelClasses = classNames(
        {[className]: className,
        [style.cat]: styleType === 'catbtn',
        [style.price]: styleType === 'pricebtn'},
        style.radiocheck,
    )

    return (
        <label ref={ref} className={labelClasses} aria-labelledby={children}>
            <input
                {...also} 
                type="radio"
                value={children}
                name={name}
                id={children}
            />
            {styleType === "default" && <Radio className={style.svg} />}
            <span>{children}</span>
        </label>
    );
});

export const CheckBox = forwardRef<HTMLLabelElement,InputItemProps> ((props, ref) => {
    const {children, className = '', name, styleType = "default", ...also} = props;

    const style = styleMap[styleType];

    const labelClasses = classNames(
        className,
        {[style.cat]: styleType === 'catbtn',
        [style.price]: styleType === 'pricebtn'},
        style.radiocheck,
    )


    return (
        <label ref={ref} className={labelClasses} aria-labelledby={children}>
            <input
                {...also} 
                type="checkbox"
                name={name}
                value={children}
                id={children}
            />
            {styleType === "default" && <Check className={style.svg} />}
            <span>{children}</span>
        </label>  
    );
});