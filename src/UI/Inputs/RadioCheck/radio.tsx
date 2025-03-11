import { forwardRef } from "react";
import { RadioProps, CheckProps } from "./radio.types";

import { Radio, Check } from "../../../svg";

import def from './radio.module.css';
import btn from './pricebtn.module.css';
import naked from './naked.module.css';
import classNames from "classnames";

const styleMap = {
    default: def,
    pricebtn: btn,
    catbtn: btn,
    naked: naked,
    icon: def
};

export const RadioItem = forwardRef<HTMLLabelElement,RadioProps> ((props, ref) => {
    const {children, className = '', name, value, styleType = "default", ...also} = props;

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
                name={name}
                value={value || children}
                id={children}
            />
            {(styleType === "default" || styleType === "icon") && <Radio className={style.svg} />}
            {styleType != "icon" && <span>{children}</span>}
        </label>
    );
});

export const CheckBox = forwardRef<HTMLLabelElement,CheckProps> ((props, ref) => {
    const {children, className = '', value, styleType = "default", ...also} = props;

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
                name={children}
                value={value || value}
                id={children}
            />
            {(styleType === "default" || styleType === "icon") && <Check className={style.svg} />}
            {styleType != "icon" && <span>{children}</span> }
        </label>  
    );
});