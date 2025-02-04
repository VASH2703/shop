import { forwardRef, useState } from 'react';
import { InputItemProps, CheckListProps } from './radio.types';
import { Check } from '../../../svg';
import style from './check.module.css';

export const CheckBox = forwardRef<HTMLInputElement,InputItemProps> ((props, ref) => {
    const {children, disabled, checked = false, name, value, onClick, className} = props;

    return (
        <div className={`${style.checkboxBlock} ${className || ''}`} onClick={onClick} {...props}>
            <input
                ref={ref}
                type="checkbox"
                value={value || children}
                name={name}
                disabled={disabled}
                checked={checked}
                className={style.checkbox}
            />
            <Check checked={checked}/>
            <label className={style.checkboxLabel}>{children}</label>
        </div>  
    );
});

export const CheckList = forwardRef<HTMLDivElement, CheckListProps> ((props, ref) => {
    const {title, values, disabled, selected, name, className} = props;

    const length = values.length;
    const [select, setSelect] = useState(selected || Array(length).fill(false));

    const handleClick = (index: number) => {
        const newSelect = [...select];
        newSelect[index] = !newSelect[index];
        setSelect(newSelect);
    }

    return (
        <div className={`${style.block} ${className || ''}`} ref={ref} {...props}>
            {title && <div className={style.title}>{title}</div>}
            {values.map((item, index) => (
                    <CheckBox
                        disabled={disabled}
                        name={name}
                        checked={select[index]}
                        id={name+' '+index}
                        key={name+' '+index}
                        onClick={!disabled ? () => handleClick(index) : () => {}}
                    >
                        {item}
                    </CheckBox>
                ))}
        </div>
    );
});