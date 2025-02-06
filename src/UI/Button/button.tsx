import { forwardRef } from 'react';
import classNames from 'classnames';
import style from './button.module.css';
import { ButtonProps, BtnAnchoreProps } from './button.types';

export const Button =  forwardRef<HTMLButtonElement, ButtonProps> ((props, ref) => {
    const { children, styleType, full, className=''} = props;

    const styleMap = {
        price: style.price,
        cat: style.cat,
        arrow: style.arrow, 
        close: style.close
    };

    const buttonClasses = classNames (
        style.btn,
        styleType && styleMap[styleType],
        {[className]: className,
        [style.full]: full}
    );
    
    return (
        <button
            {...props}
            className={buttonClasses}
            ref={ref}
        >
            {children}
        </button>
    );
});

export const BtnAnchor =  forwardRef <HTMLAnchorElement, BtnAnchoreProps> ((props, ref) => {
    const { children, kind, full, className=''} = props;

    const styleMap = {
        price: style.price,
        cat: style.cat,
        arrow: style.arrow, 
        close: style.close
    };

    const buttonClasses = classNames (
        style.btn,
        kind && styleMap[kind],
        {[className]: className,
        [style.full]: full}
    );
    
    return (
        <a
            {...props}
            className={buttonClasses}
            ref={ref}
        >
            {children}
        </a>
    );
});