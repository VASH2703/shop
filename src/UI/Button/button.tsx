import { forwardRef } from 'react';
import classNames from 'classnames';
import style from './button.module.css';
import { ButtonProps } from './button.types';

export const Button =  forwardRef <HTMLButtonElement, ButtonProps> ((props, ref) => {
    const { children, kind, disabled, full, className } = props;

    const styleMap = {
        price: style.price,
        cat: style.cat,
        arrow: style.arrow, 
        close: style.close
    };

    const buttonClasses = classNames (
        style.btn,
        kind && styleMap[kind],
        {className: className,
        [style.full]: full}
    );
    
    return (
        <button
            className={buttonClasses}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
});